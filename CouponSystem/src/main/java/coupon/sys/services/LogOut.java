package coupon.sys.services;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.catalina.servlet4preview.http.HttpServletRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@CrossOrigin(origins = "*")
@Controller
public class LogOut {
	
	/**
	 * This Method is responsible for the logout process.
	 * When user logout the system we make sure to delete all his seesions 
	 * @param request - The Request Object
	 * @param response - The Response Object
	 */
	
	@RequestMapping(value="/logout", method=RequestMethod.POST)
	public void doLogOut(HttpServletRequest request, HttpServletResponse response ) {		
		HttpSession session = request.getSession(false);
		if(request.isRequestedSessionIdValid() &&  session!= null) {
			session.invalidate();
		}
		Cookie[] cookies = request.getCookies();
		for(Cookie cookie: cookies) {
			cookie.setMaxAge(0);
			cookie.setValue(null);
			cookie.setPath("/");
			response.addCookie(cookie);
		}			
	}

}
