package coupon.sys.services;


import org.apache.catalina.servlet4preview.http.HttpServletRequest;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import coupon.sys.core.beans.Coupon;
import coupon.sys.core.beans.CouponType;
import coupon.sys.core.exceptions.CouponSystemException;
import coupon.sys.core.facade.ClientFacade;
import coupon.sys.core.facade.CompanyFacade;


/**
 * The Web Service class manages all the requests sent by the Company client
 * @author Yehuda.Hizmi
 *
 */
@CrossOrigin(origins = "*")
@RestController
public class CompanyWebService {
	
	
	private ClientFacade getCompanyFacade(HttpServletRequest request) throws CouponSystemException {
		return (CompanyFacade)request.getSession().getAttribute("CompanyFacade");
//		CouponSystem couponSystem =  CouponSystem.getInstance();
//		return couponSystem.login("Requshet", "123456", "Company");
		//return couponSystem.login("Segev", "56711", "Company");
		
	}
	
	/**
	 * This web service activates the create coupon method at the Company Facade class.
	 * The method adds a new Coupon to the DB and also a new record to company coupon table
	 * @param coupon - the coupon to be added to the DB (sent from the client side via JSON Object)
	 * @throws CouponSystemException - the exception that was thrown from the Company Facade
	 */
	//@RequestMapping(value="/company/managed-coupons", method=RequestMethod.POST ,consumes=MediaType.APPLICATION_JSON_VALUE)
	@RequestMapping(value="/company/create-coupon", method=RequestMethod.POST ,consumes=MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<String> createCoupon (@RequestBody Coupon coupon, HttpServletRequest request) { //throws CouponSystemException {
		try {
			CompanyFacade companyFacade = (CompanyFacade) this.getCompanyFacade(request);
			companyFacade.createCoupon(coupon);
			return ResponseEntity.status(HttpStatus.CREATED).contentType(MediaType.TEXT_PLAIN).body("OK");
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}
		
	/**
	 * This web service activates the remove coupon method at the Company Facade class.
	 * The method deletes a coupon from the DB (only the coupons of the logged in company) 
	 * @param coupon - the coupon to be deleted from to the DB (sent from the client side via JSON Object)
	 * @throws CouponSystemException - the exception that was thrown from the company Facade
	 */
	//@RequestMapping(value="/company/managed-coupons/{coupon_id}", method=RequestMethod.DELETE ,consumes=MediaType.APPLICATION_JSON_VALUE)
	@RequestMapping(value="/company/remove-coupon/{coupon_id}", method=RequestMethod.DELETE ,consumes=MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<String>  removeCoupon (@PathVariable("coupon_id") long coupon_id,@RequestBody Coupon coupon, HttpServletRequest request) { // throws CouponSystemException {
		try {
			CompanyFacade companyFacade = (CompanyFacade) this.getCompanyFacade(request);
			companyFacade.removeCoupon(coupon);					
			return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.TEXT_PLAIN).body("Coupon Was Deleted");
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}
	
	/**
	 * This web service activates the update coupon method at the Company Facade class.
	 * The method updates a coupon in the DB (only the coupons of the logged in company) 
	 * @param coupon - the coupon to be updated (sent from the client side via JSON Object)
	 * @throws CouponSystemException - the exception that was thrown from the Company Facade
	 */
	//@RequestMapping(value="/company/managed-coupons/{coupon_id}", method=RequestMethod.PUT ,consumes=MediaType.APPLICATION_JSON_VALUE)
	@RequestMapping(value="/company/update-coupon/{coupon_id}", method=RequestMethod.PUT ,consumes=MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<String> updateCoupon (@PathVariable("coupon_id") long coupon_id,@RequestBody Coupon coupon, HttpServletRequest request) { // throws CouponSystemException {
		try {
			CompanyFacade companyFacade = (CompanyFacade) this.getCompanyFacade(request);
			companyFacade.updateCoupon(coupon);					
			return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.TEXT_PLAIN).body("Coupon Was Updated");
		} catch (CouponSystemException e) {
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}
	
	/**
	 * This web service activates the view company information method at the Company Facade class.
	 * The method returns the information of the logged in company
	 * @return - return the information of the logged in company
	 * @throws CouponSystemException - the exception that was thrown from the Company Facade
	 */
	//@RequestMapping(value="/company/company-info", method=RequestMethod.GET ,produces=MediaType.APPLICATION_JSON_VALUE)
	@RequestMapping(value="/company/company-info", method=RequestMethod.GET ,produces=MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> viewCompanyInfromation(HttpServletRequest request) { // throws CouponSystemException {
		try {
			CompanyFacade companyFacade = (CompanyFacade) this.getCompanyFacade(request);
			return ResponseEntity.status(HttpStatus.OK).body(companyFacade.viewCompanyInfromation());			
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}
	
	/**
	 * This web service activates the get coupon method at the Company Facade class.
	 * The method returns a company from the DB based on the provided id
	 * @param coupon_id - the id of the requested coupon
	 * @return - the coupon that matches the id
	 * @throws CouponSystemException - the exception that was thrown from the Company Facade
	 */
	
	//@RequestMapping(value="/company/managed-coupons/{coupon_id}", method=RequestMethod.GET ,produces=MediaType.APPLICATION_JSON_VALUE)
	@RequestMapping(value="/company/get-coupon/{coupon_id}", method=RequestMethod.GET ,produces=MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> getCoupon (@PathVariable("coupon_id") long coupon_id, HttpServletRequest request) { //throws CouponSystemException {
		try {
			CompanyFacade companyFacade = (CompanyFacade) this.getCompanyFacade(request);			
			return ResponseEntity.status(HttpStatus.OK).body(companyFacade.getCoupon(coupon_id));			
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}

	/**
	 * This web service activates the get all coupons method at the Company Facade class.
	 * The method returns all the coupons in the DB (only the coupons that belong to the the logged in company)
	 * @return - return all the coupons that are linked to the asked company
	 * @throws CouponSystemException - the exception that was thrown from the Company Facade
	 */
	//@RequestMapping(value="/company/managed-coupons", method=RequestMethod.GET ,produces=MediaType.APPLICATION_JSON_VALUE)
	@RequestMapping(value="/company/get-all-coupons", method=RequestMethod.GET ,produces=MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> getAllCoupons (HttpServletRequest request) { // throws CouponSystemException {
		try {			
			CompanyFacade companyFacade = (CompanyFacade) this.getCompanyFacade(request);				
			return ResponseEntity.status(HttpStatus.OK).body(companyFacade.getAllCoupons());			
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}
	
	/**
	 * This web service activates the get coupon by price method at the Company Facade class.
	 * The method returns all the coupons with a price equals or less than the price send as a parameter
	 * @param lessthanprice - the price the compare to 
	 * @return - all the coupons that are priced equals or less than the price send as a parameter
	 * @throws CouponSystemException - the exception that was thrown from the Company Facade
	 */
	//@RequestMapping(value="/company/managed-coupons/price", method=RequestMethod.GET ,produces=MediaType.APPLICATION_JSON_VALUE)
	@RequestMapping(value="/company/coupon-by-price", method=RequestMethod.GET ,produces=MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> getCouponByPrice (@RequestParam(value = "price", required = true) double price, HttpServletRequest request) { // throws CouponSystemException {
		try {
			//public Collection<Coupon> getCouponByPrice (@PathVariable("price") double price) throws CouponSystemException {
			CompanyFacade companyFacade = (CompanyFacade) this.getCompanyFacade(request);			
			return ResponseEntity.status(HttpStatus.OK).body(companyFacade.getCouponByPrice(price));			
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
		
	}
	
	/**
	 * This web service activates the get coupon by date method at the Company Facade class.
	 * The method returns all the coupons with a date equals or less than the date send as a parameter
	 * @param lessthanprice - the date the compare to 
	 * @return - all the coupons that are dated equals or less than the date send as a parameter
	 * @throws CouponSystemException - the exception that was thrown from the Company Facade
	 */
	//@RequestMapping(value="/company/managed-coupons/date", method=RequestMethod.GET ,produces=MediaType.APPLICATION_JSON_VALUE)
	@RequestMapping(value="/company/coupon-by-date", method=RequestMethod.GET ,produces=MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> getCouponByDate (@RequestParam(value = "date") @DateTimeFormat(pattern = "yyyy-MM-dd") java.util.Date date, HttpServletRequest request) { //throws CouponSystemException {
		try{
			CompanyFacade companyFacade = (CompanyFacade) this.getCompanyFacade(request);			
			return ResponseEntity.status(HttpStatus.OK).body(companyFacade.getCouponByDate(date));			
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}
	
	/**
	 * This web service activates the get coupon by type method at the Company Facade class.
	 * The method returns all the coupons with the relevant type send as a parameter 
	 * @param coupontype - the type of coupons to be returned
	 * @return - all the coupons that are match to the type type send as a parameter
	 * @throws CouponSystemException - the exception that was thrown from the Company Facade
	 */
	//@RequestMapping(value="/company/managed-coupons/type", method=RequestMethod.GET ,produces=MediaType.APPLICATION_JSON_VALUE)
	@RequestMapping(value="/company/coupon-by-type", method=RequestMethod.GET ,produces=MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> getCouponByType (@RequestParam(value = "type") CouponType type, HttpServletRequest request) { //throws CouponSystemException {
		try {
			CompanyFacade companyFacade = (CompanyFacade) this.getCompanyFacade(request);			
			return ResponseEntity.status(HttpStatus.OK).body(companyFacade.getCouponByType(type));			
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}
	
}
