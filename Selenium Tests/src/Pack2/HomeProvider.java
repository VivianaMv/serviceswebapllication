package Pack2;

import static org.junit.jupiter.api.Assertions.*;

import java.time.Duration;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

class HomeProvider {

	private WebDriver driver;

    @BeforeEach
    void setUp() {
        // Initialize WebDriver before each test
        driver = new ChromeDriver();
    }

//    @AfterEach
//	void tearDown() {
//		if (driver != null) {
//			driver.quit();
//		}
//		}
		 private void HomePageProvider() {
	    	   driver.get("http://localhost:3000/homeuser");  // Update to use a file URI
	    	       
	           WebElement EmailInput = driver.findElement(By.id("signinEmail"));
	           EmailInput.sendKeys("montoya@gmail.com");

	           WebElement PasswordInput = driver.findElement(By.id("signinPassword"));
	           PasswordInput.sendKeys("123456789");
	           
	           WebElement btnlogin = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/form/button"));
	           btnlogin.click();
	       

	}  
		 
		 @Test
		   
		    void testBookedServ()  {
			 HomePageProvider();
			 WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
			 String expectedUrl = "http://localhost:3000/homeprovider";
		   	    

		   	    
		    }
}
//
//			@Test
//			void testSignUpBtn() {
//				HomePageProvider();
//			    WebElement signUpBtn = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[1]/div[3]/button[2]"));
//			    // Click on the btn
//			    signUpBtn.click();
//			    
//			    String currentUrl = driver.getCurrentUrl();
//			    assertEquals("http://localhost:3000/signupoptions", currentUrl, "The URL should navigate to the SignUp page.");
//			}
//			
//			@Test
//			void testPrivacyLink() {
//				HomePageProvider();
//			    WebElement privacylink = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[3]/p[1]"));
//			    // Click on privacy
//			    privacylink.click();
//			    
//			    String currentUrl = driver.getCurrentUrl();
//			    assertEquals("http://localhost:3000/privacy", currentUrl, "The URL should navigate to the privacy page.");
//			
//			}
//			@Test
//			void testTermandCondLink() {
//				HomePageProvider();
//			    WebElement TermandCondlink = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[3]/p[2]"));
//			    // Click on term and conditions.
//			    TermandCondlink.click();
//			    
//			    String currentUrl = driver.getCurrentUrl();
//			    assertEquals("http://localhost:3000/termcond", currentUrl, "The URL should navigate to the term and condition  page.");
//			
//			}
//			@Test
//			void testHomeLink() {
//				HomePageProvider();
//			    WebElement Homelink = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[1]/div[2]/a[1]"));
//			    // Click on term and conditions.
//			    Homelink.click();
//			    
//			    String currentUrl = driver.getCurrentUrl();
//			    assertEquals("http://localhost:3000/", currentUrl, "The URL should navigate to the home page.");
//			
//			}
//			
//
//
//}
