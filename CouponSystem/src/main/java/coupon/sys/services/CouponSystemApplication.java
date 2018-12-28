package coupon.sys.services;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

//import java.util.Calendar;
//import java.util.GregorianCalendar;
//
//import org.springframework.boot.SpringApplication;
//import org.springframework.boot.autoconfigure.SpringBootApplication;
//
//import coupon.sys.core.beans.Company;
//import coupon.sys.core.beans.Coupon;
//import coupon.sys.core.beans.CouponType;
//import coupon.sys.core.beans.Customer;
//import coupon.sys.core.coupon.system.CouponSystem;
//import coupon.sys.core.exceptions.CouponSystemException;
//import coupon.sys.core.facade.AdminFacade;
//import coupon.sys.core.facade.CompanyFacade;
//import dbCreation.CleanDbTables;

@SpringBootApplication
public class CouponSystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(CouponSystemApplication.class, args);
//		
//		CleanDbTables.cleanDbTable();
//		try {
//		CouponSystem couponSystem = CouponSystem.getInstance();
//		AdminFacade adminFacade = (AdminFacade) couponSystem.login("admin", "1234", "Admin");
//		//Resturant
//		Company companyLandver = new Company("Landver", "123456", "ivory@gmail.com");
//		//Electricity
//		Company companyIvory = new Company( "Ivory Computers", "123456", "ivory@gmail.com");
//		//Food
//		Company companyShferSal = new Company( "ShferSal", "123456", "shferSal@gamil.com");
//		//Health
//		Company companySpaLtd = new Company( "SpaLtd", "123456", "SpaLtd@gamil.com");
//		//Sports
//		Company companyHolmes = new Company( "Holmes Place", "123456", "holmesPlace@gamil.com");		
//		//Travelling
//		Company companyRequshet = new Company( "Requshet", "123456", "requshet@gamil.com");
//		//Travelling
//		Company companyIsrair = new Company( "Israir", "123456", "israir@gamil.com");
//		adminFacade.createCompany(companyLandver);
//		adminFacade.createCompany(companyIvory);
//		adminFacade.createCompany(companyShferSal);
//		adminFacade.createCompany(companySpaLtd);
//		adminFacade.createCompany(companyHolmes);
//		adminFacade.createCompany(companyRequshet);
//		adminFacade.createCompany(companyIsrair);
//		
//
//		Customer customerAssaf = new Customer("Assaf Grabli", "56331");
//		Customer customerAdir = new Customer("Adir Miler", "adir113");
//		Customer customerBen = new Customer("Ben Eliyo", "el114!");
//		adminFacade.createCustomer(customerAssaf);
//		adminFacade.createCustomer(customerAdir);
//		adminFacade.createCustomer(customerBen);
//		
//		//Create Resturant coupons
//		CompanyFacade companyFacade = (CompanyFacade) couponSystem.login("Landver", "123456", "Company");
//		Coupon coupon1 = new Coupon("Coffe 1 + 1", new GregorianCalendar(2018, Calendar.DECEMBER, 25).getTime(), new GregorianCalendar(2019, Calendar.AUGUST, 1).getTime(), 75,
//				CouponType.RESTURANT, "Only in the morning", 15, "data:image/jpeg;base64,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");
//		Coupon coupon2 = new Coupon("Landver 1+1", new GregorianCalendar(2018, Calendar.NOVEMBER,17).getTime(), new GregorianCalendar(2019, Calendar.SEPTEMBER, 30).getTime(), 150,
//				CouponType.RESTURANT, "Only with coupon", 70, "https://interservice.co.il/wp-content/uploads/2018/05/%d7%9c%d7%a0%d7%93%d7%95%d7%95%d7%a8.jpg");
//		companyFacade.createCoupon(coupon1);
//		companyFacade.createCoupon(coupon2);		
//		} catch (CouponSystemException e) {
//			e.printStackTrace();
//		}	
//		
		
		
		
	/*	CleanDbTables.cleanDbTable();
		try {
			CouponSystem couponSystem = CouponSystem.getInstance();
			
			System.out.println("***************************Test Admin Methods*****************************");
			System.out.println("****************************************************************************");
			AdminFacade adminFacade = (AdminFacade) couponSystem.login("admin", "1234", "Admin");
			Company companyAdama = new Company( "ADAMA", "123456", "Adama@adama.com");
			Company companyEgged = new Company("Egged", "33454", "Egged@gamil.com");
			Company companySegev = new Company( "Segev", "56711", "Segev@gamil.com");
			
			//Create Companies
			System.out.println("Creating companies: (Methods: createCompany and getAllCompanies");
			System.out.println("===============================================================");
			adminFacade.createCompany(companyAdama);
			adminFacade.createCompany(companyEgged);
			adminFacade.createCompany(companySegev);
			System.out.println("The following compnaies were created:\n" + adminFacade.getAllCompanies());
			
			//Update Company
			Company companySegev_updated = new Company( "Segev", "5671188", "SegevExpress@gamil.com");
			System.out.println("\nUpadte companies: (Methods: updateCompany and getCompany");
			System.out.println("===============================================================");
			System.out.println("The company before update process");
			System.out.println("--------------------------------------");
			System.out.println(adminFacade.getCompany(companySegev.getId()));
			adminFacade.updateCompany(companySegev_updated);
			System.out.println("\nThe company after update process");
			System.out.println("--------------------------------------");
			System.out.println(adminFacade.getCompany(companySegev.getId()));
			
			//Remove Company
			System.out.println("\nRemove companies: (Methods: removeCompany and getAllCompanies");
			System.out.println("===============================================================");
			System.out.println("The companies before delete process");
			System.out.println("--------------------------------------");
			System.out.println(adminFacade.getAllCompanies());
			adminFacade.removeCompany(companySegev);
			System.out.println("\nThe companies after delete process");
			System.out.println("--------------------------------------");
			System.out.println(adminFacade.getAllCompanies());
			
			
			System.out.println("***************************Test Customer Methods*****************************");
			System.out.println("****************************************************************************");			
			
			Customer customerAssaf = new Customer("Assaf Grabli", "56331");
			Customer customerAdir = new Customer("Adir Miler", "adir113");
			Customer customerBen = new Customer("Ben Eliyo", "el114!");
			//Customer customer3_updated = new Customer("Ben Eliyo", "el11496!");	
			
			//Create Customers
			System.out.println("Creating Customers: (Methods: createCustomer and getAllCustomers");
			System.out.println("===============================================================");
			adminFacade.createCustomer(customerAssaf);
			adminFacade.createCustomer(customerAdir);
			adminFacade.createCustomer(customerBen);
			System.out.println("The following customers where created:\n" + adminFacade.getAllCustomers());
			
			//Update Customer
			Customer customerBen_updated = new Customer("Ben Eliyo", "el11496!");
			System.out.println("\nUpadte customers: (Methods: updateCustomer and getCustomer");
			System.out.println("===============================================================");
			System.out.println("The customer before update process");
			System.out.println("--------------------------------------");
			System.out.println(adminFacade.getCustomer(customerBen.getId()));
			adminFacade.updateCustomer(customerBen_updated);
			System.out.println("\nThe customer after update process");
			System.out.println("--------------------------------------");
			System.out.println(adminFacade.getCustomer(customerBen.getId()));
			
			//Remove Company
			System.out.println("\nRemove customer: (Methods: removeCustomer and getAllCustomers");
			System.out.println("===============================================================");
			System.out.println("The customers before delete process");
			System.out.println("--------------------------------------");
			System.out.println(adminFacade.getAllCustomers());
			adminFacade.removeCustomer(customerBen);
			System.out.println("\nThe customers after delete process");
			System.out.println("--------------------------------------");
			System.out.println(adminFacade.getAllCustomers());						
		} catch (CouponSystemException e) {
			e.printStackTrace();
		}	
		
		
		CleanDbTables.cleanDbTable();
		
		try {
			CouponSystem couponSystem = CouponSystem.getInstance();
		System.out.println("Create Companies by the Admin before the Company methods are checked");
		System.out.println("****************************************************************************");
		AdminFacade adminFacade = (AdminFacade) couponSystem.login("admin", "1234", "Admin");
		Company companyAdama = new Company( "ADAMA", "123456", "Adama@adama.com");
		Company companyEgged = new Company("Egged", "33454", "Egged@gamil.com");
		Company companySegev = new Company( "Segev", "56711", "Segev@gamil.com");
		adminFacade.createCompany(companyAdama);
		adminFacade.createCompany(companyEgged);
		adminFacade.createCompany(companySegev);
		System.out.println("The following compnaies were created:\n" + adminFacade.getAllCompanies());
		
		
		System.out.println("\n***************************Test Company Methods*****************************");
		System.out.println("****************************************************************************\n");
		//Create Companies
		System.out.println("Creating Coupons: (Methods: createCoupon and getCoupons");
		System.out.println("===============================================================");
		CompanyFacade companyFacade = (CompanyFacade) couponSystem.login("ADAMA", "123456", "Company");
		Coupon couponGreg = new Coupon("Greg 30% off", new GregorianCalendar(2018, Calendar.APRIL, 25).getTime(), new GregorianCalendar(2018, Calendar.AUGUST, 1).getTime(), 75,
				CouponType.RESTURANT, "For all users", 25, "No Image");
		Coupon couponLandver1P1 = new Coupon("Landver 1+1", new GregorianCalendar(2018, Calendar.APRIL, 25).getTime(), new GregorianCalendar(2018, Calendar.SEPTEMBER, 30).getTime(), 150,
				CouponType.RESTURANT, "For all users", 70, "No Image");
		Coupon couponLandver = new Coupon("Landver 24% off on breakfast", new GregorianCalendar(2018, Calendar.APRIL, 25).getTime(), new GregorianCalendar(2018, Calendar.JUNE, 5).getTime(), 150,
				CouponType.RESTURANT, "For all users", 70, "No Image");
		Coupon couponCoffeeGoo = new Coupon("Coffe Goo - Free 1 + 1", new GregorianCalendar(2018, Calendar.APRIL, 25).getTime(), new GregorianCalendar(2018, Calendar.JUNE, 8).getTime(), 150,
				CouponType.RESTURANT, "For all users", 70, "No Image");
		Coupon couponOvens = new Coupon("25% off on all Ovens", new GregorianCalendar(2018, Calendar.APRIL, 25).getTime(), new GregorianCalendar(2018, Calendar.JULY, 31).getTime(), 150,
				CouponType.ELECTRICITY, "For all users", 0, "No Image");			
		Coupon couponAllProducts = new Coupon("10% off on all products", new GregorianCalendar(2018, Calendar.APRIL, 25).getTime(), new GregorianCalendar(2018, Calendar.JULY, 27).getTime(), 1000,
				CouponType.ELECTRICITY, "For all Empolyees", 200, "No Image");
		companyFacade.createCoupon(couponGreg);
		companyFacade.createCoupon(couponLandver1P1);
		companyFacade.createCoupon(couponLandver);
		companyFacade.createCoupon(couponCoffeeGoo);
		companyFacade.createCoupon(couponOvens);
		companyFacade.createCoupon(couponAllProducts);
		System.out.println("The following coupons were created:\n" + companyFacade.getAllCoupons());
		
		
		System.out.println("\nget Coupons: (Methods: getCouponsByType and getCoupon");
		System.out.println("===============================================================");
		System.out.println(companyFacade.getCouponByType(CouponType.ELECTRICITY));
		System.out.println(companyFacade.getCouponByType(CouponType.RESTURANT));
		
		//Update Coupons
		Coupon couponCoffeeGoo_Updated = new Coupon("Coffe Goo - Free 1 + 1", new GregorianCalendar(2018, Calendar.SEPTEMBER, 25).getTime(), new GregorianCalendar(2018, Calendar.DECEMBER, 8).getTime(), 70,
				CouponType.RESTURANT, "For all users", 60, "No Image");
		System.out.println("\nUpadte Coupon: (Methods: updateCoupon and getCoupon");
		System.out.println("===============================================================");
		System.out.println("The coupon before update process");
		System.out.println("--------------------------------------");
		System.out.println(companyFacade.getCoupon(couponCoffeeGoo.getId()));
		companyFacade.updateCoupon(couponCoffeeGoo_Updated);
		System.out.println("\nThe coupon after update process");
		System.out.println("--------------------------------------");
		System.out.println(companyFacade.getCoupon(couponCoffeeGoo.getId()));
		
		
		//Remove coupon
		System.out.println("\nRemove coupon: (Methods: removeCoupon and getAllCoupons");
		System.out.println("===============================================================");
		System.out.println("The coupons before delete process");
		System.out.println("--------------------------------------");
		System.out.println(companyFacade.getAllCoupons());
		companyFacade.removeCoupon(couponLandver);
		System.out.println("\nThe copuns after delete process");
		System.out.println("--------------------------------------");
		System.out.println(companyFacade.getAllCoupons());	
		
		} catch (CouponSystemException e) {
			e.printStackTrace();
		}	

		
		CleanDbTables.cleanDbTable();
		try {
			CouponSystem couponSystem = CouponSystem.getInstance();
			System.out.println("Create Companies, Customers and Coupons before the Customer methods are checked");
			System.out.println("****************************************************************************");
			AdminFacade adminFacade = (AdminFacade) couponSystem.login("admin", "1234", "Admin");
			Company companyAdama = new Company( "ADAMA", "123456", "Adama@adama.com");
			Company companyEgged = new Company("Egged", "33454", "Egged@gamil.com");
			Company companySegev = new Company( "Segev", "56711", "Segev@gamil.com");
			adminFacade.createCompany(companyAdama);
			adminFacade.createCompany(companyEgged);
			adminFacade.createCompany(companySegev);
			CompanyFacade companyFacade = (CompanyFacade) couponSystem.login("ADAMA", "123456", "Company");
			Coupon couponGreg = new Coupon("Greg 30% off", new GregorianCalendar(2018, Calendar.APRIL, 25).getTime(), new GregorianCalendar(2018, Calendar.AUGUST, 1).getTime(), 75,
					CouponType.RESTURANT, "For all users", 25, "No Image");
			Coupon couponLandver1P1 = new Coupon("Landver 1+1", new GregorianCalendar(2018, Calendar.APRIL, 25).getTime(), new GregorianCalendar(2018, Calendar.SEPTEMBER, 30).getTime(), 150,
					CouponType.RESTURANT, "For all users", 70, "No Image");
			Coupon couponLandver = new Coupon("Landver 24% off on breakfast", new GregorianCalendar(2018, Calendar.APRIL, 25).getTime(), new GregorianCalendar(2018, Calendar.JUNE, 5).getTime(), 150,
					CouponType.RESTURANT, "For all users", 70, "No Image");
			Coupon couponCoffeeGoo = new Coupon("Coffe Goo - Free 1 + 1", new GregorianCalendar(2018, Calendar.APRIL, 25).getTime(), new GregorianCalendar(2018, Calendar.JUNE, 8).getTime(), 150,
					CouponType.RESTURANT, "For all users", 70, "No Image");
			Coupon couponOvens = new Coupon("25% off on all Ovens", new GregorianCalendar(2018, Calendar.APRIL, 25).getTime(), new GregorianCalendar(2018, Calendar.JULY, 31).getTime(), 150,
					CouponType.ELECTRICITY, "For all users", 0, "No Image");			
			Coupon couponAllProducts = new Coupon("10% off on all products", new GregorianCalendar(2018, Calendar.APRIL, 25).getTime(), new GregorianCalendar(2019, Calendar.JULY, 27).getTime(), 1000,
					CouponType.ELECTRICITY, "For all Empolyees", 200, "No Image");
			companyFacade.createCoupon(couponGreg);
			companyFacade.createCoupon(couponLandver1P1);
			companyFacade.createCoupon(couponLandver);
			companyFacade.createCoupon(couponCoffeeGoo);
			companyFacade.createCoupon(couponOvens);
			companyFacade.createCoupon(couponAllProducts);			
			Customer customerAssaf = new Customer("Assaf Grabli", "56331");
			Customer customerAdir = new Customer("Adir Miler", "adir113");
			Customer customerBen = new Customer("Ben Eliyo", "el114!");
			adminFacade.createCustomer(customerAssaf);
			adminFacade.createCustomer(customerAdir);
			adminFacade.createCustomer(customerBen);
			System.out.println("The following customers where created:\n" + adminFacade.getAllCustomers());
			System.out.println("The following companies were created:\n" + adminFacade.getAllCompanies());
			System.out.println("The following coupons were created:\n" + companyFacade.getAllCoupons());
			
			
			//Purchase Coupon
			//This row is running only for the purpose of getting the coupon object 
			CustomerFacade customerFacade = (CustomerFacade) couponSystem.login("Assaf Grabli", "56331", "Customer");
			Coupon couponTopurchase =  companyFacade.getCoupon(couponLandver1P1.getId());
			Coupon couponTopurchase2 =  companyFacade.getCoupon(couponAllProducts.getId());
			System.out.println("\nPurchase Coupon: (Methods: purchaseCoupon and getAllPurchasedCoupons");
			System.out.println("======================================================================");
			customerFacade.purchaseCoupon(couponTopurchase);
			customerFacade.purchaseCoupon(couponTopurchase2);
			System.out.println("\nThe coupons after being purchased");
			System.out.println("--------------------------------------");
			System.out.println(customerFacade.getAllPurchasedCoupons());	
			
			//Get all coupons by types:
			System.out.println("\nCoupons of ELECTRICITY type:");
			System.out.println(customerFacade.getAllPurchasedCouponsByType(CouponType.ELECTRICITY));
			System.out.println("\nCoupons of RESTURANT type:");
			System.out.println(customerFacade.getAllPurchasedCouponsByType(CouponType.RESTURANT));
			
			//Get all coupons by price:
			System.out.println("\nCoupons up to 300 Shekels:");
			System.out.println(customerFacade.getAllPurchasedCouponsByPrice(100));
			
		} catch (CouponSystemException e) {
			e.printStackTrace();
		}
		
		*/
	}
}
