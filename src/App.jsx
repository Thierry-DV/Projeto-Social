import React from 'react';
import { ShieldCheck, Lock, AlertTriangle, Users, BookOpen } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      
      {/* CABEÇALHO */}
      <header className="bg-blue-900 text-white p-6 shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck size={32} className="text-green-400" />
            <h1 className="text-2xl font-bold tracking-wider">CiberSênior</h1>
          </div>
          <nav className="hidden md:flex gap-6 font-medium">
            <a href="#missao" className="hover:text-green-400 transition">Missão</a>
            <a href="#projeto" className="hover:text-green-400 transition">O Projeto</a>
            <a href="#acoes" className="hover:text-green-400 transition">Relatórios</a>
            <a href="#equipe" className="hover:text-green-400 transition">Equipe</a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="bg-blue-800 text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Navegação Segura para a <span className="text-green-400">Melhor Idade</span>
          </h2>
          <p className="text-xl mb-10 text-blue-100">
            Um projeto de conscientização e defesa cibernética focado em proteger quem sempre cuidou de nós.
          </p>
          <a href="#missao" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition transform hover:scale-105">
            Conheça o Projeto
          </a>
        </div>
      </section>

      {/* NOSSA MISSÃO */}
      <section id="missao" className="py-16 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="bg-blue-100 p-4 rounded-full w-fit mb-4">
              <Lock size={40} className="text-blue-900" />
            </div>
            <h3 className="text-3xl font-bold text-blue-900 mb-4">Por que o CiberSênior existe?</h3>
            <p className="text-lg leading-relaxed text-gray-700">
              A tecnologia deve conectar pessoas, não criar vulnerabilidades. Com o aumento alarmante de fraudes digitais, golpes pelo WhatsApp e links maliciosos, a terceira idade se tornou o alvo principal de cibercriminosos. Nossa missão é promover a inclusão digital com segurança, entregando conhecimento prático para que nossos idosos naveguem com total autonomia e confiança.
            </p>
          </div>
          <div className="md:w-1/2 bg-white p-8 rounded-2xl shadow-xl border-t-4 border-green-500">
            <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
              <AlertTriangle className="text-yellow-500" />
              Foco na Prevenção
            </h4>
            <ul className="space-y-3 text-gray-700 font-medium">
              <li>✓ Identificação de Phishing</li>
              <li>✓ Segurança no WhatsApp</li>
              <li>✓ Criação de senhas fortes</li>
              <li>✓ Verificação de links suspeitos</li>
            </ul>
          </div>
        </div>
      </section>

      {/* O PROJETO */}
      <section id="projeto" className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-blue-900 mb-6">Como atuamos?</h3>
          <p className="text-lg max-w-3xl mx-auto mb-12 text-gray-700">
            Desenvolvido por estudantes de Ciência da Computação, o CiberSênior atua na raiz do problema: a falta de familiaridade com as armadilhas digitais. Nosso projeto cria ambientes simulados e realiza oficinas práticas de capacitação na comunidade.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <BookOpen size={40} className="text-blue-600 mx-auto mb-4" />
              <h4 className="font-bold text-xl mb-2">Oficinas Práticas</h4>
              <p className="text-gray-600">Treinamentos interativos em bairros e comunidades focados na realidade do idoso.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <ShieldCheck size={40} className="text-green-500 mx-auto mb-4" />
              <h4 className="font-bold text-xl mb-2">Simulação de Golpes</h4>
              <p className="text-gray-600">Ambientes seguros onde o usuário aprende a identificar e bloquear ameaças reais.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <Users size={40} className="text-blue-600 mx-auto mb-4" />
              <h4 className="font-bold text-xl mb-2">Apoio Contínuo</h4>
              <p className="text-gray-600">Material de apoio simplificado para consulta rápida no dia a dia.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AÇÕES NA COMUNIDADE (RESERVADO PARA NOTA 2) */}
      <section id="acoes" className="py-16 px-6 max-w-6xl mx-auto">
        <div className="bg-blue-900 text-white p-10 rounded-3xl shadow-2xl text-center">
          <h3 className="text-3xl font-bold mb-4">Impacto Real (Ações do Projeto)</h3>
          <p className="text-lg mb-6 text-blue-200">
            Nesta seção, documentaremos nossas futuras intervenções práticas. Nas próximas semanas, o CiberSênior irá a campo para realizar as duas ações exigidas, e todos os registros (fotos, metodologias e relatórios) estarão disponíveis aqui.
          </p>
          <div className="inline-block bg-blue-800 px-6 py-3 rounded-lg font-mono text-sm border border-blue-700">
            Status: Aguardando execução das ações práticas na comunidade.
          </div>
        </div>
      </section>

      {/* NOSSA EQUIPE */}
      <section id="equipe" className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-blue-900 mb-10">Quem faz o CiberSênior acontecer</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Thierry', 'Iago', 'Ronald', 'Enzio'].map((membro) => (
              <div key={membro} className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
                <div className="w-20 h-20 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center text-blue-800 font-bold text-2xl">
                  {membro.charAt(0)}
                </div>
                <h4 className="font-bold text-lg text-gray-800">{membro}</h4>
                <p className="text-sm text-blue-600 font-medium">Ciência da Computação</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <p>© 2026 CiberSênior - Projeto Social</p>
      </footer>
    </div>
  );
}

export default App;