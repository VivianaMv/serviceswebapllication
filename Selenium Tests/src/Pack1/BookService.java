package Pack1;

import static org.junit.jupiter.api.Assertions.*;

import java.awt.Paint;
import java.time.Duration;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import io.opentelemetry.exporter.logging.SystemOutLogRecordExporter;
import junit.framework.Assert;

class BookService {

	private WebDriver driver;

	@BeforeEach
	void setUp() {
		driver = new ChromeDriver();
	}

//	@AfterEach
//	void tearDown() {
//		if (driver != null) {
//			driver.quit();
//		}
//	}

	private void loadBookServicePage() {
		driver.get("http://localhost:3000/");
		WebElement loginBtn = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[1]/div[3]/button[1]"));
		loginBtn.click();
		WebElement inputField = driver.findElement(By.id("signinEmail"));
		String testEmail = "mainaaa.16@gmail.com";
		inputField.sendKeys(testEmail);

		WebElement passwordField = driver.findElement(By.id("signinPassword"));
		String testPassword = "123456";
		passwordField.sendKeys(testPassword);

		WebElement submitBtn = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/form/button"));
		submitBtn.click();		
	}

//	@Test
//	void testCorrectBookServicePage() {
//		loadBookServicePage();
//		WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
//	    WebElement bookServiceBtn = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"root\"]/div/div[2]/div[3]/table/tbody/tr[1]/td[3]/button")));   
//	    bookServiceBtn.click();
//	    
//	    String url = driver.getCurrentUrl();	    
//	    String baseUrl = url.split("\\?")[0];	    
//	    String expectedUrl = "http://localhost:3000/bookservice";
//	    
//	    assertEquals(expectedUrl, baseUrl);
//	}
//	
//	@Test
//	void testAvailableServicesMatchProviderServices() {
//	    loadBookServicePage();
//	    WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
//	    
//	    WebElement servicesElement = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"root\"]/div/div[2]/div[3]/table/tbody/tr[2]/td[2]/p")));
//	    String servicesText = servicesElement.getText();	    
//	    String[] servicesArray = servicesText.split(",\\s*");
//
//	    WebElement bookServiceBtn = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"root\"]/div/div[2]/div[3]/table/tbody/tr[2]/td[3]/button")));
//	    bookServiceBtn.click();
//	    
//	    WebElement selectElement = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"root\"]/div/div[2]/form/select")));
//	    List<WebElement> options = selectElement.findElements(By.tagName("option"));
//	    
//	    List<String> selectServices = new ArrayList<>();
//	    
//	    for (WebElement option : options) {
//	        String service = option.getText();
//	        if (!service.equals("Select Service")) {
//	            selectServices.add(service);
//	        }
//	    }
//	    
//	    assertArrayEquals(servicesArray, selectServices.toArray());
//	}
//	
//	@Test
//	void testServiceTypeOptionsDisplayed() {
//		loadBookServicePage();
//	    WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
//
//	    WebElement bookServiceBtn = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"root\"]/div/div[2]/div[3]/table/tbody/tr[2]/td[3]/button")));
//	    bookServiceBtn.click();	    
//	    
//	    WebElement selectableElement = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/form/select"));
//	    boolean displayed = selectableElement.isDisplayed();
//	    assertTrue(displayed);
//	}
//	
//	
//	@Test
//	void testCanSelectAServiceType() {
//		loadBookServicePage();
//	    WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
//
//	    WebElement bookServiceBtn = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"root\"]/div/div[2]/div[3]/table/tbody/tr[2]/td[3]/button")));
//	    bookServiceBtn.click();
//	    
//	    WebElement selectElement = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"root\"]/div/div[2]/form/select")));
//	    
//	    WebElement paintingOption = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/form/select/option[2]"));
//	    paintingOption.click();
//	    String optionText = paintingOption.getText();	
//		assertTrue(optionText.contains("Painting"));	    
//	}
//
//	@Test
//	void testDateDisplayed() {
//		loadBookServicePage();
//	    WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
//
//	    WebElement bookServiceBtn = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"root\"]/div/div[2]/div[3]/table/tbody/tr[2]/td[3]/button")));
//	    bookServiceBtn.click();	    
//	    
//	    WebElement selectableDate = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/form/input[1]"));
//	    boolean displayed = selectableDate.isDisplayed();
//	    assertTrue(displayed);
//	}
//	
//	@Test
//	void testSelectDate() {
//	    loadBookServicePage();
//	    WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
//
//	    WebElement bookServiceBtn = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"root\"]/div/div[2]/div[3]/table/tbody/tr[2]/td[3]/button")));
//	    bookServiceBtn.click();    
//
//	    WebElement dateInput = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/form/input[1]"));	    
//	    dateInput.sendKeys("10-09-2024");
//
//	    String dateSet = dateInput.getAttribute("value");
//	    System.out.println(dateSet);    
//
//	    assertEquals("10-09-2024", dateSet);
//	}
//
//	@Test
//	void testTimeDisplayed() {
//		loadBookServicePage();
//	    WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
//
//	    WebElement bookServiceBtn = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"root\"]/div/div[2]/div[3]/table/tbody/tr[2]/td[3]/button")));
//	    bookServiceBtn.click();	    
//	    
//	    WebElement selectableTime = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/form/input[2]"));
//	    boolean displayed = selectableTime.isDisplayed();
//	    assertTrue(displayed);
//	}
//
//	@Test
//	void testSelectTime() {
//	    loadBookServicePage();
//	    WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
//
//	    WebElement bookServiceBtn = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"root\"]/div/div[2]/div[3]/table/tbody/tr[2]/td[3]/button")));
//	    bookServiceBtn.click();    
//	    
//	    WebElement timeInput = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/form/input[2]"));
//	    
//	    timeInput.sendKeys("08:00AM");
//
//	    String timeSet = timeInput.getAttribute("value");  
//	    System.out.println(timeSet);
//
//	    assertEquals("08:00", timeSet);
//	}
//
//	@Test
//	void testAddressDisplayed() {
//		loadBookServicePage();
//	    WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
//
//	    WebElement bookServiceBtn = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"root\"]/div/div[2]/div[3]/table/tbody/tr[2]/td[3]/button")));
//	    bookServiceBtn.click();	    
//	    
//	    WebElement enterAddress = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/form/input[3]"));
//	    boolean displayed = enterAddress.isDisplayed();
//	    assertTrue(displayed);
//	}
//	
//	@Test
//	void testAddressEntered() {
//		loadBookServicePage();
//	    WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
//
//	    WebElement bookServiceBtn = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"root\"]/div/div[2]/div[3]/table/tbody/tr[2]/td[3]/button")));
//	    bookServiceBtn.click();	    
//	    
//	    WebElement enterAddress = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/form/input[3]"));
//	    enterAddress.sendKeys("test address");
//	    
//	    String addressSet = enterAddress.getAttribute("value");
//	    System.out.println(addressSet);    
//
//	    assertEquals("test address", addressSet);	    
//	}
//
//	@Test
//	void testBookServiceButtonDisplayed() {
//		loadBookServicePage();
//	    WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
//
//	    WebElement bookServiceBtn = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"root\"]/div/div[2]/div[3]/table/tbody/tr[2]/td[3]/button")));
//	    bookServiceBtn.click();	    
//	    
//	    WebElement bookButton = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/form/button"));
//	    boolean displayed = bookButton.isDisplayed();
//	    assertTrue(displayed);
//	}
//	
	@Test
	void testBookServiceButtonClickable() {
		loadBookServicePage();
	    WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));

	    WebElement bookServiceBtn = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"root\"]/div/div[2]/div[3]/table/tbody/tr[2]/td[3]/button")));
	    bookServiceBtn.click();	    
	    
	    WebElement bookButton = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/form/button"));
	    bookButton.click();
	}
	
	
	
	





}
