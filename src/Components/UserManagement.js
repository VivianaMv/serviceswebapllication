import React, { useState, useEffect } from 'react';
import { ref, get, update, remove, set } from 'firebase/database';
import { database } from '../firebase';
import './Style.css';
import Header from './Header';
import Footer from './Footer';
import { useNavigate } from "react-router-dom";


const UserManagement = ({userEmail, setUserEmail }) => {
    const [pendingProviders, setPendingProviders] = useState([]);
    const [approvedProviders, setApprovedProviders] = useState([]);
    const [allUsers, setAllUsers] = useState([]);
    const [rejectedProviders, setRejectedProviders] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [selectedProvider, setSelectedProvider] = useState(null);
    const [userStatus, setUserStatus] = useState('');
    const [providerStatus, setProviderStatus] = useState('');
    const [error, setError] = useState(null);
    const [email, setEmail] = useState('admin@gmail.com');
    const [isSignedIn, setIsSignedIn] = useState(true);
    const navigate = useNavigate();


    useEffect(() => {
        fetchPendingProviders();
        fetchApprovedProviders();
        fetchAllUsers();
        fetchRejectedProviders();
    }, []);

    const fetchPendingProviders = async () => {
        try {
            const snapshot = await get(ref(database, 'pendingProviders'));
            if (snapshot.exists()) {
                const providers = [];
                snapshot.forEach(childSnapshot => {
                    providers.push({ id: childSnapshot.key, ...childSnapshot.val() });
                });
                setPendingProviders(providers);
            }
        } catch (error) {
            setError(error.message);
        }
    };

    const fetchApprovedProviders = async () => {
        try {
            const snapshot = await get(ref(database, 'approvedProviders'));
            if (snapshot.exists()) {
                const providers = [];
                snapshot.forEach(childSnapshot => {
                    providers.push({ id: childSnapshot.key, ...childSnapshot.val() });
                });
                setApprovedProviders(providers);
            }
        } catch (error) {
            setError(error.message);
        }
    };

    const fetchAllUsers = async () => {
        try {
            const snapshot = await get(ref(database, 'users'));
            if (snapshot.exists()) {
                const users = [];
                snapshot.forEach(childSnapshot => {
                    users.push({ id: childSnapshot.key, ...childSnapshot.val() });
                });
                setAllUsers(users);
            }
        } catch (error) {
            setError(error.message);
        }
    };

    const fetchRejectedProviders = async () => {
        try {
            const snapshot = await get(ref(database, 'rejectedProviders'));
            if (snapshot.exists()) {
                const providers = [];
                snapshot.forEach(childSnapshot => {
                    providers.push({ id: childSnapshot.key, ...childSnapshot.val() });
                });
                setRejectedProviders(providers);
            }
        } catch (error) {
            setError(error.message);
        }
    };

    const handleApprove = async (providerId) => {
        try {
            const providerRef = ref(database, `pendingProviders/${providerId}`);
            const providerSnapshot = await get(providerRef);
            const providerData = providerSnapshot.val();

            await set(ref(database, `approvedProviders/${providerId}`), { ...providerData, status: 'not_banned' });

            await remove(providerRef);

            fetchPendingProviders();
            fetchApprovedProviders();
        } catch (error) {
            setError(error.message);
        }
    };

    const handleNotApprove = async (providerId) => {
        try {
            const providerRef = ref(database, `pendingProviders/${providerId}`);
            const providerSnapshot = await get(providerRef);
            const providerData = providerSnapshot.val();

            await set(ref(database, `rejectedProviders/${providerId}`), providerData);
            await remove(providerRef);

            fetchPendingProviders();
            fetchRejectedProviders();
        } catch (error) {
            setError(error.message);
        }
    };

    const handleUserBanStatusChange = async () => {
        try {
            if (selectedUser) {
                await update(ref(database, `users/${selectedUser}`), { status: userStatus });
                setSelectedUser(null);
                fetchAllUsers();
            }
        } catch (error) {
            setError(error.message);
        }
    };

    const handleProviderBanStatusChange = async () => {
        try {
            if (selectedProvider) {
                await update(ref(database, `approvedProviders/${selectedProvider}`), { status: providerStatus });
                setSelectedProvider(null);
                fetchApprovedProviders();
            }
        } catch (error) {
            setError(error.message);
        }
    };

    const handleSignOut = () => {
        setUserEmail("");
        setIsSignedIn(false);
        navigate('/');
    };

    return (
        <div>
            <Header email={email} handleSignOut={handleSignOut} isSignedIn={isSignedIn} />
            <div className='user-management-page'>
                <div className='user-management-container'>
                    <h2>Manage Pending Providers</h2>
                    {error && <p className="error-message">{error}</p>}
                    <div className='um-list'>
                        {pendingProviders.length > 0 ? (
                            pendingProviders.map(provider => (
                                <div key={provider.id} className='provider-item'>
                                    <p>Storefront Name: {provider.storeName}</p>
                                    <p>Email: {provider.email}</p>
                                    <div className='provider-actions'>
                                        <button onClick={() => handleApprove(provider.id)}>Approve</button>
                                        <button onClick={() => handleNotApprove(provider.id)}>Not Approve</button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No pending providers.</p>
                        )}
                    </div>
                </div>

                <div className='user-management-container'>
                    <h2>Approved Providers</h2>
                    <div className='um-list'>
                        {approvedProviders.length > 0 ? (
                            approvedProviders.map(provider => (
                                <div key={provider.id} className='provider-item'>
                                    <p>Storefront Name: {provider.storeName}</p>
                                    <p>Email: {provider.email}</p>
                                    <input
                                        type="radio"
                                        name={`status-provider-${provider.id}`}
                                        value="banned"
                                        checked={provider.status === 'banned'}
                                        onChange={() => {
                                            setSelectedProvider(provider.id);
                                            setProviderStatus('banned');
                                        }}
                                    /> Banned
                                    <input
                                        type="radio"
                                        name={`status-provider-${provider.id}`}
                                        value="not_banned"
                                        checked={provider.status === 'not_banned'}
                                        onChange={() => {
                                            setSelectedProvider(provider.id);
                                            setProviderStatus('not_banned');
                                        }}
                                    /> Not Banned
                                </div>
                            ))
                        ) : (
                            <p>No approved providers.</p>
                        )}
                    </div>
                    <button onClick={handleProviderBanStatusChange}>Update Provider Status</button>
                </div>

                <div className='user-management-container'>
                    <h2>Manage User Status</h2>
                    <div className='um-list'>
                        {allUsers.length > 0 ? (
                            allUsers.map(user => (
                                <div key={user.id} className='user-item'>
                                    <p>Name: {user.firstName + " " + user.lastName}</p>
                                    <p>Email: {user.email}</p>
                                    <input
                                        type="radio"
                                        name={`status-user-${user.id}`}
                                        value="banned"
                                        checked={user.status === 'banned'}
                                        onChange={() => {
                                            setSelectedUser(user.id);
                                            setUserStatus('banned');
                                        }}
                                    /> Banned
                                    <input
                                        type="radio"
                                        name={`status-user-${user.id}`}
                                        value="not_banned"
                                        checked={user.status === 'not_banned'}
                                        onChange={() => {
                                            setSelectedUser(user.id);
                                            setUserStatus('not_banned');
                                        }}
                                    /> Not Banned
                                </div>
                            ))
                        ) : (
                            <p>No users found.</p>
                        )}
                    </div>
                    <button onClick={handleUserBanStatusChange}>Update User Status</button>
                </div>

                <div className='user-management-container'>
                    <h2>Rejected Providers</h2>
                    <div className='um-list'>
                        {rejectedProviders.length > 0 ? (
                            rejectedProviders.map(provider => (
                                <div key={provider.id} className='provider-item'>
                                    <p>Storefront Name: {provider.storeName}</p>
                                    <p>Email: {provider.email}</p>
                                </div>
                            ))
                        ) : (
                            <p>No rejected providers.</p>
                        )}
                    </div>
                </div>
            </div>
            <Footer
                userEmail={userEmail}
                handleSignOut={handleSignOut}
                isSignedIn={isSignedIn}
            />
        </div>
    );
};

export default UserManagement;
