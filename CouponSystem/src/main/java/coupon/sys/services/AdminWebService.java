package coupon.sys.services;

import org.apache.catalina.servlet4preview.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import coupon.sys.core.beans.Company;
import coupon.sys.core.beans.Customer;
import coupon.sys.core.exceptions.CouponSystemException;
import coupon.sys.core.facade.AdminFacade;
import coupon.sys.core.facade.ClientFacade;


/**
 * The Web Service class manages all the requests sent by the admin client
 * @author Yehuda.Hizmi
 *
 */
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/admin")
public class AdminWebService {

	private ClientFacade getAdminFacade(HttpServletRequest request) throws CouponSystemException {
		return (AdminFacade)request.getSession().getAttribute("AdminFacade");
		// CouponSystem couponSystem =  CouponSystem.getInstance();
		// return couponSystem.login("admin", "1234", "Admin");
	}
	
	/**
	 * This web service activates the create company method at the Admin Facade class.
	 * The method adds a new company to the DB
	 * @param company - the company to be added to the DB (sent from the client side via JSON Object) 
	 * @throws CouponSystemException - the exception that was thrown from the Admin Facade 
	 */
	//@RequestMapping(value="/company/managed-companies", method=RequestMethod.POST ,consumes=MediaType.APPLICATION_JSON_VALUE)
	@RequestMapping(value="/company/create-company", method=RequestMethod.POST ,consumes=MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<String> createCompany (@RequestBody Company company, HttpServletRequest request) {//throws CouponSystemException {
		try {
			AdminFacade adminFacade = (AdminFacade) this.getAdminFacade(request);
			adminFacade.createCompany(company);
			return ResponseEntity.status(HttpStatus.CREATED).contentType(MediaType.TEXT_PLAIN).body("OK");
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}
	
	/**
	 * This web service activates the remove company method at the Admin Facade class.
	 * The method deletes a company from the DB
	 * @param company - the company to be deleted from to the DB (sent from the client side via JSON Object) 
	 * @throws CouponSystemException - the exception that was thrown from the Admin Facade
	 */
	//@RequestMapping(value="/company/managed-companies/{comp_id}", method=RequestMethod.DELETE ,consumes=MediaType.APPLICATION_JSON_VALUE)
	@RequestMapping(value="/company/remove-company/{comp_id}", method=RequestMethod.DELETE ,consumes=MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<String> removeCompany (@PathVariable("comp_id") long comp_id,@RequestBody Company company, HttpServletRequest request) { //throws CouponSystemException {
		try {
			AdminFacade adminFacade = (AdminFacade) this.getAdminFacade(request);
			adminFacade.removeCompany(company);
			return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.TEXT_PLAIN).body("Company Was Deleted");
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}
	
	/**
	 * This web service activates the update company method at the Admin Facade class.
	 * The method updates a company in the DB
	 * @param company - the company to be updated (sent from the client side via JSON Object) 
	 * @throws CouponSystemException - the exception that was thrown from the Admin Facade
	 */
	//@RequestMapping(value="/company/managed-companies/{comp_id}", method=RequestMethod.PUT ,consumes=MediaType.APPLICATION_JSON_VALUE)
	@RequestMapping(value="/company/update-company/{comp_id}", method=RequestMethod.PUT ,consumes=MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<String> updateCompany (@PathVariable("comp_id") long comp_id,@RequestBody Company company, HttpServletRequest request) { //throws CouponSystemException {
		try {
			AdminFacade adminFacade = (AdminFacade) this.getAdminFacade(request);	
			adminFacade.updateCompany(company);		
			return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.TEXT_PLAIN).body("Company Was Updated");
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}
	
	/**
	 * This web service activates the get company method at the Admin Facade class.
	 * The method returns a company from the DB
	 * @param comp_id - the id of the requested company
	 * @return - the company that matches the id
	 * @throws CouponSystemException - the exception that was thrown from the Admin Facade
	 */
	//@RequestMapping(value="/company/managed-companies/{comp_id}", method=RequestMethod.GET ,produces=MediaType.APPLICATION_JSON_VALUE)
	@RequestMapping(value="/company/get-company/{comp_id}", method=RequestMethod.GET ,produces=MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> getCompany (@PathVariable("comp_id") long comp_id, HttpServletRequest request) { //throws CouponSystemException {
		try {
			AdminFacade adminFacade = (AdminFacade) this.getAdminFacade(request);			
			return ResponseEntity.status(HttpStatus.OK).body(adminFacade.getCompany(comp_id));
		} catch (CouponSystemException e) {
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}
	

	/**
	 * This web service activates the get all companies method at the Admin Facade class.
	 * The method returns all the companies in the DB
	 * @return - return all the companies in the DB
	 * @throws CouponSystemException - the exception that was thrown from the Admin Facade
	 */
	//@RequestMapping(value="/company/managed-companies", method=RequestMethod.GET ,produces=MediaType.APPLICATION_JSON_VALUE)
	@RequestMapping(value="/company/get-all-companies", method=RequestMethod.GET ,produces=MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> getAllCompanies (HttpServletRequest request) { //throws CouponSystemException {
		try {
			AdminFacade adminFacade = (AdminFacade) this.getAdminFacade(request);				
			return ResponseEntity.status(HttpStatus.OK).body(adminFacade.getAllCompanies());
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}
			
	/**
	 * This web service activates the create company method at the Admin Facade class.
	 * The method adds a new customer to the DB
	 * @param customer - the customer to be added to the DB (sent from the client side via JSON Object)
	 * @throws CouponSystemException - the exception that was thrown from the Admin Facade
	 */
	//@RequestMapping(value="/customer/managed-customers", method=RequestMethod.POST ,consumes=MediaType.APPLICATION_JSON_VALUE)
	@RequestMapping(value="/customer/create-customer", method=RequestMethod.POST ,consumes=MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<String> createCustomer (@RequestBody Customer customer, HttpServletRequest request) {//throws CouponSystemException {	
		try {
			AdminFacade adminFacade = (AdminFacade) this.getAdminFacade(request);
			adminFacade.createCustomer(customer);					
			return ResponseEntity.status(HttpStatus.CREATED).contentType(MediaType.TEXT_PLAIN).body("Customer Created");
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}
	/**
	 * This web service activates the remove customer method at the Admin Facade class.
	 * The method deletes a customer from the DB 
	 * @param customer - the customer to be deleted from the DB (sent from the client side via JSON Object)
	 * @throws CouponSystemException - the exception that was thrown from the Admin Facade
	 */
	//@RequestMapping(value="/customer/managed-customers/{cust_id}", method=RequestMethod.DELETE ,consumes=MediaType.APPLICATION_JSON_VALUE)
	@RequestMapping(value="/customer/remove-customer/{cust_id}", method=RequestMethod.DELETE ,consumes=MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<String> removeCustomer (@PathVariable("cust_id") long cust_id,@RequestBody Customer customer, HttpServletRequest request) { //throws CouponSystemException {	
		try {
			AdminFacade adminFacade = (AdminFacade) this.getAdminFacade(request);
			adminFacade.removeCustomer(customer);					
			return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.TEXT_PLAIN).body("Customer Was Deleted");
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}
	
	/**
	 * This web service activates the update customer method at the Admin Facade class.
	 * The method updates a customer in the DB
	 * @param customer - the customer to be updated (sent from the client side via JSON Object)
	 * @throws CouponSystemException - the exception that was thrown from the Admin Facade
	 */
	//@RequestMapping(value="/customer/managed-customers/{cust_id}", method=RequestMethod.PUT ,consumes=MediaType.APPLICATION_JSON_VALUE)
	@RequestMapping(value="/customer/update-customer/{cust_id}", method=RequestMethod.PUT ,consumes=MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<String> updateCustomer (@PathVariable("cust_id") long cust_id,@RequestBody Customer customer, HttpServletRequest request) { //throws CouponSystemException {	
		try {
			AdminFacade adminFacade = (AdminFacade) this.getAdminFacade(request);			
			adminFacade.updateCustomer(customer);
			return ResponseEntity.status(HttpStatus.OK).body("Customer Was Updated");
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}
	
	/**
	 * This web service activates the get customer method at the Admin Facade class.
	 * The method returns a customer from the DB
	 * @param cust_id - the id of the requested customer
	 * @return - the customer that matches the id
	 * @throws CouponSystemException - the exception that was thrown from the Admin Facade
	 */
	//@RequestMapping(value="/customer/managed-customers/{cust_id}", method=RequestMethod.GET ,produces=MediaType.APPLICATION_JSON_VALUE)	
	@RequestMapping(value="/customer/get-customer/{cust_id}", method=RequestMethod.GET ,produces=MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> getCustomer(@PathVariable("cust_id") long cust_id, HttpServletRequest request) { //throws CouponSystemException {
		try {					
			AdminFacade adminFacade = (AdminFacade) this.getAdminFacade(request);
			return ResponseEntity.status(HttpStatus.OK).body(adminFacade.getCustomer(cust_id));
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}
		
	/**
	 * This web service activates the get all customers method at the Admin Facade class.
	 * The method returns all the customers in the DB
	 * @return a collection of customers
	 * @throws CouponSystemException - the exception that was thrown from the Admin Facade
	 */
	//@RequestMapping(value="/customer/managed-customers", method=RequestMethod.GET ,produces= MediaType.APPLICATION_JSON_VALUE)
	@RequestMapping(value="/customer/get-all-customers", method=RequestMethod.GET ,produces= MediaType.APPLICATION_JSON_VALUE)
	public  @ResponseBody ResponseEntity<?> getAllCustomers (HttpServletRequest request) { // throws CouponSystemException {
		try {
			AdminFacade adminFacade = (AdminFacade) this.getAdminFacade(request);			
			return ResponseEntity.status(HttpStatus.OK).body(adminFacade.getAllCustomers());
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}
	
	

}
