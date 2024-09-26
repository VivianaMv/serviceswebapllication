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
		driver.get("http://localhost:3000/signin");
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
		
		
		
	}

}
