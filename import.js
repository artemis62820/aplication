import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/Accueil")
public class AccueilServlet extends HttpServlet {
  private static final long serialVersionUID = 1L;

  protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    response.setContentType("text/html");
    PrintWriter out = response.getWriter();
    out.println("<!DOCTYPE html>");
    out.println("<html>");
    out.println("<head>");
    out.println("<meta name='viewport' content='width=device-width, initial-scale=1.0'>");
    out.println("<link rel='stylesheet' href='styles.css'>");
    out.println("<title>Bienvenue sur mon site</title>");
    out.println("</head>");
    out.println("<body>");
    out.println("<header>");
    out.println("<h1>Bienvenue sur mon site</h1>");
    out.println("</header>");
    out.println("<nav>");
    out.println("<ul>");
    out.println("<li><a href='Accueil'>Accueil</a></li>");
    out.println("<li><a href='Apropos'>A propos</a></li>");
    out.println("<li><a href='Contact'>Contact</a></li>");
    out.println("</ul>");
    out.println("</nav>");
    out.println("<main>");
    out.println("<h2>Mon contenu principal</h2>");
    out.println("<p>Bienvenue sur mon site web. Vous trouverez ici des informations sur mes projets et mes intérêts.</p>");
    out.println("</main>");
    out.println("<footer>");
    out.println("<p>Copyright 2021 - Tous droits réservés</p>");
    out.println("</footer>");
    out.println("</body>");
    out.println("</html>");
  }
}