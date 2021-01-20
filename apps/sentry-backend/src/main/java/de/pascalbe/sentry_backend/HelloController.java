package de.pascalbe.sentry_backend;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class HelloController {

	@RequestMapping("/")
	public MyObject index() throws InterruptedException {
		Thread.sleep(3000);
//		MyObject response = new MyObject();
//		response.setValue("Done");
//		return response;
	  throw new RuntimeException("Error in controller");
	}
}
