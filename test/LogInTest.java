import org.junit.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.List;

import static org.junit.Assert.assertTrue;

/**
 * Created by mikas on 12.11.2015.
 */
public class LogInTest {
    private String baseUrl = "http://localhost:3000/";

    @Test
    public void checkTitle(){
        FirefoxDriver driver = new FirefoxDriver();
        driver.get(baseUrl);

        assertTrue(driver.getTitle().equals("Projekt Grupowy 2015 - aplikacja demo"));

        driver.quit();
    }

    @Test
    public void checkIfThereAreFields(){
        FirefoxDriver driver = new FirefoxDriver();
        driver.get(baseUrl);

        int numberOfInputs = 2;

        List<WebElement> inputs = driver.findElementsByCssSelector("input");
        WebElement button = driver.findElementByCssSelector("button");

        assertTrue(inputs.size() == numberOfInputs && button != null);
        driver.quit();
    }

    @Test
    public void testLoginAction(){
        FirefoxDriver driver = new FirefoxDriver();
        driver.get(baseUrl);

        List<WebElement> inputs = driver.findElementsByCssSelector("input");

        WebElement roomInput = inputs.get(0);
        roomInput.sendKeys("13");
        WebElement loginInput = inputs.get(1);
        loginInput.sendKeys("test");

        driver.findElementByCssSelector("button").click();

        String url = driver.getCurrentUrl();

        assertTrue(url != baseUrl);
        driver.quit();
    }
}
