package coupon.sys.services;

import org.apache.catalina.servlet4preview.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import coupon.sys.core.beans.Coupon;
import coupon.sys.core.beans.CouponType;
import coupon.sys.core.coupon.system.CouponSystem;
import coupon.sys.core.exceptions.CouponSystemException;
import coupon.sys.core.facade.ClientFacade;
import coupon.sys.core.facade.CustomerFacade;

/**
 * The Web Service class manages all the requests sent by the Customer client
 * @author Yehuda.Hizmi
 *
 */
@CrossOrigin(origins = "*")
@RestController
public class CustomerWebService {
	
	CouponSystem couponSystem;
	
	private ClientFacade getCustomerFacade(HttpServletRequest request) throws CouponSystemException {
		return (CustomerFacade)request.getSession().getAttribute("CustomerFacade");
	}
	
//	private ClientFacade getCustomerFacade() throws CouponSystemException {
//		CouponSystem couponSystem =  CouponSystem.getInstance();		
//		return couponSystem.login("Adir Miler", "123456", "Customer");
//		//return couponSystem.login("Ben Eliyo", "el114!", "Customer");
//	}
	
	
	/**
	 * This web service activates the purchase coupon method at the Customer Facade class.
	 * @param coupon -the coupon to be purchased
	 * @throws CouponSystemException - the exception that was thrown from the Company Facade
	 */
	//@RequestMapping(value="/customer/managed-coupons", method=RequestMethod.POST ,consumes=MediaType.APPLICATION_JSON_VALUE)
	@RequestMapping(value="/customer/purchase-coupon", method=RequestMethod.POST ,consumes=MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<String> purchaseCoupon (@RequestBody Coupon coupon, HttpServletRequest request) { //throws CouponSystemException {
		try {
			CustomerFacade customerFacade = (CustomerFacade) this.getCustomerFacade(request);
//			CustomerFacade customerFacade = (CustomerFacade) this.getCustomerFacade();
			customerFacade.purchaseCoupon(coupon);					
			return ResponseEntity.status(HttpStatus.CREATED).contentType(MediaType.TEXT_PLAIN).body("OK");
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}

	/**
	 * This web service activates the get all purchased coupons method at the Customer Facade class.
	 * @return - all the customer's purchased coupons
	 * @throws CouponSystemException - the exception that was thrown from the Company Facade
	 */
	//@RequestMapping(value="/customer/managed-coupons", method=RequestMethod.GET ,produces=MediaType.APPLICATION_JSON_VALUE)
	@RequestMapping(value="/customer/get-purchased-coupons", method=RequestMethod.GET ,produces=MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> getAllPurchasedCoupons (HttpServletRequest request) { //throws CouponSystemException {
		try {
			CustomerFacade customerFacade = (CustomerFacade) this.getCustomerFacade(request);								
//			CustomerFacade customerFacade = (CustomerFacade) this.getCustomerFacade();
			return ResponseEntity.status(HttpStatus.OK).body(customerFacade.getAllPurchasedCoupons());			
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}
	
	/**
	 * This web service activates the get all  available coupons method at the Coupon Facade class.
	 * @return - all the available coupons
	 * @throws CouponSystemException - the exception that was thrown from the Coupon Facade
	 */
	//@RequestMapping(value="/customer/managed-coupons", method=RequestMethod.GET ,produces=MediaType.APPLICATION_JSON_VALUE)
	@RequestMapping(value="/customer/get-all-coupons", method=RequestMethod.GET ,produces=MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> getAllCoupons (HttpServletRequest request) { //throws CouponSystemException {
		try {
			CustomerFacade customerFacade = (CustomerFacade) this.getCustomerFacade(request);								
//			CustomerFacade customerFacade = (CustomerFacade) this.getCustomerFacade();			
			return ResponseEntity.status(HttpStatus.OK).body(customerFacade.getAllCoupons());			
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}
	
	/**
	 * This web service activates the get coupon by type method at the Customer Facade class.
	 * The method returns all customer's coupons with the relevant type send as a parameter  
	 * @param coupontype - the type of coupons to be returned
	 * @return - all the coupons that are match to the type type send as a parameter
	 * @throws CouponSystemException - the exception that was thrown from the Company Facade
	 */
	//@RequestMapping(value="/customer/managed-coupons/type", method=RequestMethod.GET ,produces=MediaType.APPLICATION_JSON_VALUE)
	@RequestMapping(value="/customer/coupon-by-type", method=RequestMethod.GET ,produces=MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> getAllPurchasedCouponsByType (@RequestParam(value = "type") CouponType type, HttpServletRequest request) { //throws CouponSystemException {
		try {
			CustomerFacade customerFacade = (CustomerFacade) this.getCustomerFacade(request);						
//			CustomerFacade customerFacade = (CustomerFacade) this.getCustomerFacade();
			return ResponseEntity.status(HttpStatus.OK).body(customerFacade.getAllPurchasedCouponsByType(type));			
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}
	
	/**
	 * This web service activates the get coupon by type method at the Customer Facade class.
	 * The method returns all customer's coupons with the relevant type send as a parameter  
	 * @param coupontype - the type of coupons to be returned
	 * @return - all the coupons that are match to the type type send as a parameter
	 * @throws CouponSystemException - the exception that was thrown from the Company Facade
	 */
	//@RequestMapping(value="/customer/managed-coupons/price", method=RequestMethod.GET ,produces=MediaType.APPLICATION_JSON_VALUE)
	@RequestMapping(value="/customer/coupon-by-price", method=RequestMethod.GET ,produces=MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> getAllPurchasedCouponsByPrice (@RequestParam(value = "price") double price, HttpServletRequest request) { //throws CouponSystemException {
		try {
			CustomerFacade customerFacade = (CustomerFacade) this.getCustomerFacade(request);
//			CustomerFacade customerFacade = (CustomerFacade) this.getCustomerFacade();
			return ResponseEntity.status(HttpStatus.OK).body(customerFacade.getAllPurchasedCouponsByPrice(price));			
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}
	
	/**
	 * This web service activates the view customer information method at the Customer Facade class.
	 * The method returns the information of the logged in customer
	 * @return - return the information of the logged in customer
	 * @throws CouponSystemException - the exception that was thrown from the Company Facade
	 */
	//@RequestMapping(value="/company/company-info", method=RequestMethod.GET ,produces=MediaType.APPLICATION_JSON_VALUE)
	@RequestMapping(value="/customer/customer-info", method=RequestMethod.GET ,produces=MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody ResponseEntity<?> viewCustomerInfromation(HttpServletRequest request) { // throws CouponSystemException {
		try {
			CustomerFacade customerFacade = (CustomerFacade) this.getCustomerFacade(request);
//			CustomerFacade customerFacade = (CustomerFacade) this.getCustomerFacade();
			return ResponseEntity.status(HttpStatus.OK).body(customerFacade.viewCustomerInfromation());			
		} catch (CouponSystemException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).contentType(MediaType.TEXT_PLAIN).body(e.getMessage());
		}
	}
}
