package coupon.sys.services;

import java.io.IOException;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.springframework.stereotype.Component;
import coupon.sys.core.facade.CompanyFacade;

/**
 * This class is used to intercept the HTTP requests as Company user without a valid login process
 * @author Yehuda.Hizmi
 *
 */
@Component
public class CompanyServletFilter implements Filter {

	/**
	 * Not in use
	 */
	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
		// TODO Auto-generated method stub		
	}

	/**
	 * This method is activated any time a an Http requests is activated.
	 * In cases there isn't any valid session the user is redirected back to the login page 
	 */
	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {		
		HttpServletRequest req = (HttpServletRequest) request;
        HttpServletResponse res = (HttpServletResponse) response;        
        HttpSession session = req.getSession(false);        
        if (session == null || session.getAttribute("CompanyFacade") == null || !(session.getAttribute("CompanyFacade") instanceof CompanyFacade)) {           	
        	// Checking whether the session exists          
            res.sendRedirect("http://localhost:8080/index.html");
        } 
        else {
            // Pass the request along the filter chain
            chain.doFilter(request, response);
        }		
	}

	/**
	 * Not in use
	 */
	@Override
	public void destroy() {
		// TODO Auto-generated method stub		
	}
}
