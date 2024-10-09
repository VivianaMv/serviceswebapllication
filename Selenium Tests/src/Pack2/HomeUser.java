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


class HomeUser {
	private WebDriver driver;

    @BeforeEach
    void setUp() {
        // Initialize WebDriver before each test
        driver = new ChromeDriver();
    }

    @AfterEach
	void tearDown() {
		if (driver != null) {
			driver.quit();
		}
	}    
    
       private void loadHomePageuser() {
    	   driver.get("http://localhost:3000/homeuser");  // Update to use a file URI
    	       
           WebElement EmailInput = driver.findElement(By.id("signinEmail"));
           EmailInput.sendKeys("vivi@gmail.com");

           WebElement PasswordInput = driver.findElement(By.id("signinPassword"));
           PasswordInput.sendKeys("123456789");
           
           WebElement btnlogin = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/form/button"));
           btnlogin.click();
       }

//           @Test
//       	void testCorrectBookServicePage() {
//        	loadHomePageuser();
//       		WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
//       	    WebElement bookServiceBtn = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"root\"]/div/div[2]/div[3]/table/tbody/tr[1]/td[3]/button")));   
//       	    bookServiceBtn.click();
//       	    
//       	    String url = driver.getCurrentUrl();	    
//       	    String baseUrl = url.split("\\?")[0];	    
//       	    String expectedUrl = "http://localhost:3000/bookservice";
//       	    
//       	    assertEquals(expectedUrl, baseUrl);
       	

		@Test
	   
	    void testBookCleaningServ()  {
			loadHomePageuser();
			WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
			WebElement BookCleaningServ = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"root\"]/div/div[2]/div[3]/table/tbody/tr[1]/td[3]/button")));
			BookCleaningServ.click();
	                
	        String url = driver.getCurrentUrl();	    
	   	    String baseUrl = url.split("\\?")[0];	    
	   	    String expectedUrl = "http://localhost:3000/bookservice";
	   	    
	   	    assertEquals(expectedUrl, baseUrl);
	    }
    
		    @Test
		    
		    void testBookGardeningServ()  {
		    	loadHomePageuser();
		       WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
		       WebElement BookServiceButton2 = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"root\"]/div/div[2]/div[3]/table/tbody/tr[1]/td[3]/button")));
		        BookServiceButton2.click();
		        
		        String url = driver.getCurrentUrl();	    
		   	    String baseUrl = url.split("\\?")[0];	    
		   	    String expectedUrl = "http://localhost:3000/bookservice";
		   	    
		   	    assertEquals(expectedUrl, baseUrl);
		        
		    }
		    @Test
		    void testSignUpBtn() {
		    	loadHomePageuser();
		        WebElement signUpBtn = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[1]/div[3]/button[2]"));
		        // Click on the btn
		        signUpBtn.click();
		        
		        String currentUrl = driver.getCurrentUrl();
		        assertEquals("http://localhost:3000/signupoptions", currentUrl, "The URL should navigate to the SignUp page.");
		    }
		   
		    @Test
		    void testPrivacyLink() {
		    	loadHomePageuser();
		        WebElement privacylink = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[3]/p[1]"));
		        // Click on privacy
		        privacylink.click();
		        
		        String currentUrl = driver.getCurrentUrl();
		        assertEquals("http://localhost:3000/privacy", currentUrl, "The URL should navigate to the privacy page.");
		
		    }
		    @Test
		    void testTermandCondLink() {
		    	loadHomePageuser();
		        WebElement TermandCondlink = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[3]/p[2]"));
		        // Click on term and conditions.
		        TermandCondlink.click();
		        
		        String currentUrl = driver.getCurrentUrl();
		        assertEquals("http://localhost:3000/termcond", currentUrl, "The URL should navigate to the term and condition  page.");
		
		    }
		    @Test
			void testHomeLink() {
		    	loadHomePageuser();
			    WebElement Homelink = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[1]/div[2]/a[1]"));
			    // Click on term and conditions.
			    Homelink.click();
			    
			    String currentUrl = driver.getCurrentUrl();
			    assertEquals("http://localhost:3000/", currentUrl, "The URL should navigate to the home page.");
			
			}
			
		    
		  
		}