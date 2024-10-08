package Pack2;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

class Home {
	private WebDriver driver;

    @BeforeEach
    void setUp() {
        // Initialize WebDriver before each test
        driver = new ChromeDriver();
    }

    @AfterEach
    void tearDown() {
        // Cleanup after each test
        if (driver != null) {
            driver.quit();
        }
    }
    
    private void loadHomePage() {
    	
        driver.get("http://localhost:3000/");  // Update to use a file URI
    }
    
    @Test
    void testTitle() {
        loadHomePage();
        String expectedTitle = "React App";
        String actualTitle = driver.getTitle();
        assertEquals(expectedTitle, actualTitle, "The page title should match");
    }

    
//    @Test
//    void testTitle1() {
//        loadHomePage();
//        String expectedTitle = "Easy Home";
//        String actualTitle = driver.getTitle();        
//        assertNotEquals(expectedTitle, actualTitle, "The page title should not match");
//    }
    
    	//  Test if navigation links are visible//
    @Test
    void testNavigationLinksVisible() {
        loadHomePage();
        WebElement homeLink = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[1]/div[2]/a[1]"));
        WebElement servicesLink = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[1]/div[2]/a[2]"));
        WebElement contactLink = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[1]/div[2]/a[3]"));
        WebElement aboutLink = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[1]/div[2]/a[4]"));

        assertTrue(homeLink.isDisplayed(), "Home link should be visible");
        assertTrue(servicesLink.isDisplayed(), "Services link should be visible");
        assertTrue(contactLink.isDisplayed(), "Contact link should be visible");
        assertTrue(aboutLink.isDisplayed(), "About link should be visible");
    }   
    
    
    @Test
    void testSignInBtn() {
        loadHomePage();
        WebElement signInbtn = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[1]/div[3]/button[1]"));
        // Click on the btn
        signInbtn.click();

        // Verify if the current URL is the services page URL
        String currentUrl = driver.getCurrentUrl();
        assertEquals("http://localhost:3000/signin", currentUrl, "The URL should navigate to the SignIn page.");
    }
    
    @Test
    void testSignUpBtn() {
        loadHomePage();
        WebElement signUpBtn = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[1]/div[3]/button[2]"));
        // Click on the btn
        signUpBtn.click();

        // Verify if the current URL is the services page URL
        String currentUrl = driver.getCurrentUrl();
        assertEquals("http://localhost:3000/signupoptions", currentUrl, "The URL should navigate to the SignUp page.");
    }
    
    
    @Test
    void testImgCleaningLink() {
        loadHomePage();
        WebElement cleaningImg = driver.findElement(By.xpath("/html/body/div/div/div[2]/div[1]/img"));
        // Click on the image
        cleaningImg.click();

        // Verify if the current URL is the services page URL
        String currentUrl = driver.getCurrentUrl();
        assertEquals("http://localhost:3000/services", currentUrl, "The URL should navigate to the cleaning page.");
    }
    
    @Test
    void testImgGardeningLink() {
        loadHomePage();
        WebElement gardeningImg = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div[2]/img"));
        // Click on the image
        gardeningImg.click();

        // Verify if the current URL is the services page URL
        String currentUrl = driver.getCurrentUrl();
        assertEquals("http://localhost:3000/services", currentUrl, "The URL should navigate to the gardening page.");
    }

    @Test
    void testImgPaintingLink() {
        loadHomePage();
        WebElement paintingImg = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div[3]/img"));
        // Click on the image
        paintingImg.click();

        // Verify if the current URL is the services page URL
        String currentUrl = driver.getCurrentUrl();
        assertEquals("http://localhost:3000/services", currentUrl, "The URL should navigate to the painting page.");
    }
    
    @Test
    void testPrivacyLink() {
        loadHomePage();
        WebElement privacylink = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[3]/p[1]"));
        // Click on privacy
        privacylink.click();

        // Verify if the current URL is the services page URL
        String currentUrl = driver.getCurrentUrl();
        assertEquals("http://localhost:3000/privacy", currentUrl, "The URL should navigate to the privacy page.");
    }
    
    @Test
    void testTermandCondLink() {
        loadHomePage();
        WebElement TermandCondlink = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[3]/p[2]"));
        // Click on term and conditions.
        TermandCondlink.click();

        // Verify if the current URL is the services page URL
        String currentUrl = driver.getCurrentUrl();
        assertEquals("http://localhost:3000/termcond", currentUrl, "The URL should navigate to the term and condition  page.");
    }
    
    
    
}