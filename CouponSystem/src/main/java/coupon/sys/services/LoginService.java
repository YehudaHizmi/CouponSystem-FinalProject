package coupon.sys.services;



import javax.servlet.http.HttpServletRequest;

//import org.apache.catalina.servlet4preview.http.HttpServletRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.ResponseBody;

import coupon.sys.core.coupon.system.CouponSystem;
import coupon.sys.core.exceptions.CouponSystemException;
import coupon.sys.core.facade.ClientFacade;

/**
 * The login class responsible to manage all the login process.
 * The activate the login method which returns the relevant client facade.
 * In case there isn't any client facade the user redirected back to the login page 
 * @author Yehuda.Hizmi
 *
 */

@CrossOrigin(origins = "*")
@Controller
public class LoginService {
	
	ClientFacade clientFacade; 
	CouponSystem couponSystem;// = CouponSystem.getInstance();

	/**
	 * This Method return an application instance
	 * @throws CouponSystemException
	 */
	private LoginService() throws CouponSystemException {
		couponSystem =  CouponSystem.getInstance();
	}
	
	/**
	 * This method manages the login process.
	 * It gets 4 parameters and redirects the user to the correct page.
	 * In case of invalid information the user is redirected back to the login page.  
	 * @param name - the user name
	 * @param password - the user password
	 * @param clientType - the type of the customer (admin, company or customer)
	 * @param request - the request from the client side
	 * @return - the redirection to the correct page
	 */
	@RequestMapping(value="/login", method=RequestMethod.POST)
	public String doPost(@RequestParam String name, @RequestParam String password, 
										   @RequestParam String clientType, HttpServletRequest request) {
//		System.out.println("in");
		try {
			clientFacade = null;
//			System.out.println("in login");
			clientFacade = couponSystem.login(name, password, clientType);		
			if(this.clientFacade == null) {
				return "redirect:http://localhost:8080/index.html";
			}			
			//Add the logged in user into the session 
			request.getSession().setAttribute(clientType + "Facade", clientFacade);
//			request.getSession().setAttribute("RequestSource", clientType);			
			switch (clientType) {
				case "Admin" : return "redirect:http://localhost:8080/admin/index.html"; 
				case "Company" : return "redirect:http://localhost:8080/company/index.html";
				case "Customer" : return "redirect:http://localhost:8080/customer/index.html";
			}			
		} catch (CouponSystemException e) {
			//Put some message
			e.printStackTrace();
		}		
		return "redirect:http://localhost:8080/index.html";
	}  
		 
}
