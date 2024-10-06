package Pack1;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import io.opentelemetry.exporter.logging.SystemOutLogRecordExporter;
import junit.framework.Assert;

class SignInPage {

	private WebDriver driver;

	@BeforeEach
	void setUp() {
		driver = new ChromeDriver();
	}

	@AfterEach
	void tearDown() {
		if (driver != null) {
			driver.quit();
		}
	}

	private void loadHomePage() {
		driver.get("http://localhost:3000/");
		WebElement loginBtn = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[1]/div[3]/button[1]"));
		loginBtn.click();
		
	}
	
	@Test
	void testSignInClient() {
		loadHomePage();
		WebElement inputField = driver.findElement(By.id("signinEmail"));
		String testEmail = "mainaaa.16@gmail.com";
		inputField.sendKeys(testEmail);
		
		WebElement passwordField = driver.findElement(By.id("signinPassword"));
		String testPassword = "123456";
		passwordField.sendKeys(testPassword);
		
		WebElement submitBtn = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/form/button"));
		submitBtn.click();
	}
	
	@Test
	void testEmailRequired() {
		loadHomePage();		
		WebElement passwordField = driver.findElement(By.id("signinPassword"));
		String testPassword = "123456";
		passwordField.sendKeys(testPassword);
		
		WebElement submitBtn = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/form/button"));
		submitBtn.click();
	}
	
	@Test
	void testEmailFormat() {
		loadHomePage();	
		
		WebElement inputField = driver.findElement(By.id("signinEmail"));
		String testEmail = "mainaaa.16";
		inputField.sendKeys(testEmail);
		
		WebElement passwordField = driver.findElement(By.id("signinPassword"));
		String testPassword = "123456";
		passwordField.sendKeys(testPassword);
		
		WebElement submitBtn = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/form/button"));
		submitBtn.click();
	}
	
	@Test
	void testPasswordRequired() {
		loadHomePage();		
		WebElement inputField = driver.findElement(By.id("signinEmail"));
		String testEmail = "mainaaa.16@gmail.com";
		inputField.sendKeys(testEmail);
		
		WebElement submitBtn = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/form/button"));
		submitBtn.click();
	}

	@Test
	void testHeaderHomeButton() {
		loadHomePage();	
		WebElement homeBtn = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[1]/div[2]/a[1]"));
		homeBtn.click();
		String url = driver.getCurrentUrl();
		String expectedUrl = "http://localhost:3000/";	

		assertEquals(url, expectedUrl);
	}

	@Test
	void testHeaderServicesButton() {
		loadHomePage();			
		WebElement servicesBtn = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[1]/div[2]/a[2]"));
		servicesBtn.click();
		String url = driver.getCurrentUrl();
		String expectedUrl = "http://localhost:3000/services";		
		
		assertEquals(url, expectedUrl);
	}
	
	@Test
	void testHeaderAboutButton() {
		loadHomePage();			
		WebElement aboutBtn = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[1]/div[2]/a[3]"));
		aboutBtn.click();
		String url = driver.getCurrentUrl();
		String expectedUrl = "http://localhost:3000/aboutus";		
		
		assertEquals(url, expectedUrl);
	}
	
	@Test
	void testHeaderContactButton() {
		loadHomePage();			
		WebElement contactBtn = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[1]/div[2]/a[4]"));
		contactBtn.click();
		String url = driver.getCurrentUrl();
		String expectedUrl = "http://localhost:3000/contact";		
		
		assertEquals(url, expectedUrl);
	}
	
	@Test
	void testNavigateForgotPassword() {
		loadHomePage();
		WebElement forgotPasswordButton = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/form/p"));
		forgotPasswordButton.click();
		String url = driver.getCurrentUrl();
		String expectedUrl = "http://localhost:3000/reset";
		
		assertEquals(url, expectedUrl);			
	}

	@Test
	void testLoginClickable() {
		loadHomePage();
		WebElement submitBtn = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/form/button"));
		submitBtn.click();
	}

	@Test
	void testNavigateHeaderSignUp() {
		loadHomePage();
		WebElement headerSignUp = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[1]/div[3]/button[2]"));
		headerSignUp.click();
		String url = driver.getCurrentUrl();
		String expectedUrl = "http://localhost:3000/signupoptions";
		
		assertEquals(url, expectedUrl);			
	}
	
	@Test
	void testNavigateSignUpButton() {
		loadHomePage();
		WebElement headerSignUp = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/button"));
		headerSignUp.click();
		String url = driver.getCurrentUrl();
		String expectedUrl = "http://localhost:3000/signupoptions";
		
		assertEquals(url, expectedUrl);			
	}

	@Test
	void testPrivacyButton() {
		loadHomePage();
		WebElement privacy = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[3]/p[1]"));
		privacy.click();
		String url = driver.getCurrentUrl();
		String expectedUrl = "http://localhost:3000/privacy";
		
		assertEquals(url, expectedUrl);			
	}
	
	@Test
	void testTermsCondButton() {
		loadHomePage();
		WebElement terms = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[3]/p[2]"));
		terms.click();
		String url = driver.getCurrentUrl();
		String expectedUrl = "http://localhost:3000/termcond";
		
		assertEquals(url, expectedUrl);			
	}
}
