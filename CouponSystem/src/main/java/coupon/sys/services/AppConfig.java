package coupon.sys.services;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * At this class the filter are defined.
 * The filters are activated before the the relevant requests are activated.
 * @author Yehuda.Hizmi
 *
 */
@Configuration
public class AppConfig {
	
	/*
	 @Bean
	 public FilterRegistrationBean <ServletFilter> filterRegistrationBean() {
	  FilterRegistrationBean <ServletFilter> registrationBean = new FilterRegistrationBean<ServletFilter>();
	  registrationBean.setFilter(new ServletFilter());
	  registrationBean.addUrlPatterns("/customer/*", "/admin/*", "/company/*");
	  return registrationBean;
	 }
	*/
     
	/**
	 * This Method return a type save FilterRegistrationBean.
	 * @return - registrationBean with a AdminServletFilter filter and and urls that starts with admin 
	 */
	 @Bean
	 public FilterRegistrationBean <AdminServletFilter> filterRegistrationBeanAdmin() {
	  FilterRegistrationBean <AdminServletFilter> registrationBean = new FilterRegistrationBean<AdminServletFilter>();
	  registrationBean.setFilter(new AdminServletFilter());
	  registrationBean.addUrlPatterns("/admin/*");
	  return registrationBean;
	 }
	 
	 /**
	 * This Method return a type save FilterRegistrationBean.
	 * @return - registrationBean with a AdminServletFilter filter and and urls that starts with company
	  */
	 @Bean
	 public FilterRegistrationBean <CompanyServletFilter> filterRegistrationBeanCompany() {
	  FilterRegistrationBean <CompanyServletFilter> registrationBean = new FilterRegistrationBean<CompanyServletFilter>();
	  registrationBean.setFilter(new CompanyServletFilter());
	  registrationBean.addUrlPatterns("/company/*");
	  return registrationBean;
	 }
	 
	 /**
	 * This Method return a type save FilterRegistrationBean.
	 * @return - registrationBean with a AdminServletFilter filter and and urls that starts with customer
	  */
	 @Bean
	 public FilterRegistrationBean <CustomerServletFilter> filterRegistrationBeanCustomer() {
	  FilterRegistrationBean <CustomerServletFilter> registrationBean = new FilterRegistrationBean<CustomerServletFilter>();
	  registrationBean.setFilter(new CustomerServletFilter());
	  registrationBean.addUrlPatterns("/customer/*");
	  return registrationBean;
	 }
 
}
