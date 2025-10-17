
import { Heart, Mail, Phone, Instagram } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white" style={{ backgroundColor: "hsl(349, 55%, 50%)" }}>
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="w-8 h-8" style={{ color: "hsl(8, 100%, 85%)" }} />
              <span
                className="font-heading font-bold"
                style={{ fontFamily: "Bird House, sans-serif", color: "hsla(0, 0%, 100%, 1.00)", fontSize: "50px" }}
              >
                De Mãe para Mãe
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Um projeto literário que celebra as histórias mais emocionantes sobre o amor e a força de ser mãe!
            </p>
            <p>
              LITERARE BOOKS INTERNATIONAL LTDA - CNPJ 10.789.508/0001-74 <br />
              End.: Alameda dos Guatás, 102 - Vila da Saúde - São Paulo - SP - 04053-040
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/literarebooks/"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors duration-300 group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5" style={{ color: "hsl(8, 100%, 85%)" }} />
                <span className="text-gray-300">marketing@literarebooks.com.br</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5" style={{ color: "hsl(8, 100%, 85%)" }} />
                <span className="text-gray-300">(11) 2659-0964</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white text-sm">
              © {currentYear} Literare Books International. Todos os direitos reservados.
            </p>
            <p className="text-white text-sm flex items-center space-x-1">
              <span>Feito com</span>
              <Heart className="w-4 h-4" style={{ color: "hsla(0, 0%, 100%, 1.00)" }} />
              <span>para todas as mamães</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;