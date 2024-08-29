import React, { useState, useEffect } from 'react';
import { ref, get, update, remove, set } from 'firebase/database';
import { database } from '../firebase';
import './Style.css';
import Header from './Header';
import Footer from './Footer';

const UserManagement = () => {
    const [pendingProviders, setPendingProviders] = useState([]);
    const [allUsers, setAllUsers] = useState([]);
    const [rejectedProviders, setRejectedProviders] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [status, setStatus] = useState('not_banned');
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchPendingProviders();
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

            await set(ref(database, `users/${providerId}`), providerData);
            await remove(providerRef);

            fetchPendingProviders();
            fetchAllUsers();
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

    const handleBanStatusChange = async () => {
        try {
            if (selectedUser) {
                await update(ref(database, `users/${selectedUser}`), { status });
                setSelectedUser(null);
                fetchAllUsers();
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <Header />
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
                                    <button onClick={() => handleApprove(provider.id)}>Approve</button>
                                    <button onClick={() => handleNotApprove(provider.id)}>Not Approve</button>
                                </div>
                            ))
                        ) : (
                            <p>No pending providers.</p>
                        )}
                    </div>
                </div>

                <div className='user-management-container'>
                    <h2>Manage User Status</h2>
                    <div className='um-list'>
                        {allUsers.length > 0 ? (
                            allUsers.map(user => (
                                <div key={user.id} className='user-item'>
                                    <p>Email: {user.email}</p>
                                    <input
                                        type="radio"
                                        name={`status-${user.id}`}
                                        value="banned"
                                        checked={user.status === 'banned'}
                                        onChange={() => {
                                            setSelectedUser(user.id);
                                            setStatus('banned');
                                        }}
                                    /> Banned
                                    <input
                                        type="radio"
                                        name={`status-${user.id}`}
                                        value="not_banned"
                                        checked={user.status === 'not_banned'}
                                        onChange={() => {
                                            setSelectedUser(user.id);
                                            setStatus('not_banned');
                                        }}
                                    /> Not Banned
                                </div>
                            ))
                        ) : (
                            <p>No users found.</p>
                        )}
                    </div>
                    <button onClick={handleBanStatusChange}>Update Status</button>
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
            <Footer />
        </div>
    );
};

export default UserManagement;
