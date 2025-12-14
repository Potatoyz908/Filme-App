import { Instagram, Mail, Phone, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#867365] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Coluna 1 - Logo */}
          <div>
            <div className="font-serif text-2xl font-bold mb-3">
              Jéssica Mayara
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Especialista em Tricologia e Saúde Capilar. Tratamentos
              personalizados com empatia e evidência científica.
            </p>
          </div>

          {/* Coluna 2 - Links Rápidos */}
          <div>
            <h4 className="font-semibold mb-4 text-rose-light">
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#topo"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#procedimentos"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  Procedimentos
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  Sobre Mim
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3 - Contato */}
          <div>
            <h4 className="font-semibold mb-4 text-rose-light">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/554191774333"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
                >
                  <MessageCircle size={16} className="text-brown" />
                  (41) 99177-4333
                </a>
              </li>
              <li>
                <a
                  href="mailto:jessicamayaratricologia@gmail.com"
                  className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
                >
                  <Mail size={16} />
                  jessicamayaratricologia@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/jessicamayaratricologista"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
                >
                  <Instagram size={16} />
                  @jessicamayaratricologista
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Dra. Jéssica Mayara - CRBm-PR
            2110. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
