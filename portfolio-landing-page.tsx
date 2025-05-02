"use client"

import { Button } from "@/components/ui/button"
import { Bot, Code, Zap, Globe, Monitor, Laptop, Mail, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect } from "react"

type ComponentProps = {
  latestVersion: string
}
export default function Component({ latestVersion }: ComponentProps) {
  // Função para lidar com a rolagem suave para as âncoras
  useEffect(() => {
    // Função para rolar suavemente para a seção
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement

      // Verificar se é um link de âncora interno
      if (
        target.tagName === "A" &&
        target.hash &&
        target.origin + target.pathname === window.location.origin + window.location.pathname
      ) {
        e.preventDefault()

        // Obter o elemento alvo
        const targetElement = document.querySelector(target.hash)

        if (targetElement) {
          // Rolar suavemente para o elemento
          targetElement.scrollIntoView({
            behavior: "smooth",
          })

          // Atualizar a URL sem recarregar a página
          window.history.pushState(null, "", target.hash)
        }
      }
    }

    // Adicionar o event listener para todos os cliques na página
    document.addEventListener("click", handleSmoothScroll)

    // Verificar se há um hash na URL ao carregar a página
    if (window.location.hash) {
      const targetElement = document.querySelector(window.location.hash)
      if (targetElement) {
        // Pequeno timeout para garantir que a página esteja totalmente carregada
        setTimeout(() => {
          targetElement.scrollIntoView({
            behavior: "smooth",
          })
        }, 100)
      }
    }

    // Limpar o event listener quando o componente for desmontado
    return () => {
      document.removeEventListener("click", handleSmoothScroll)
    }
  }, [])

  return (
    <div className="flex flex-col min-h-[100dvh] bg-gradient-to-br from-purple-600 via-blue-500 to-purple-600">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-white/10 backdrop-blur-sm sticky top-0 z-50">
        <a className="flex items-center justify-center" href="#">
          <span className="sr-only">Celso Ladislau Junior</span>
          <span className="font-bold text-lg text-white">CLJ</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium text-white hover:underline underline-offset-4" href="#servicos">
            Serviços
          </a>
          <a className="text-sm font-medium text-white hover:underline underline-offset-4" href="#portfolio">
            Portfólio
          </a>
          <a className="text-sm font-medium text-white hover:underline underline-offset-4" href="#sobre">
            Sobre
          </a>
          <a className="text-sm font-medium text-white hover:underline underline-offset-4" href="#contato">
            Contato
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Celso Ladislau Junior
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl font-light">
                  Especialista em Automações, Chatbots com IA, Sistemas e Desenvolvimento Web
                </p>
              </div>
              <div className="space-x-4 mt-6">
                <a href="#servicos">
                  <Button className="bg-white text-purple-600 hover:bg-gray-100 rounded-full px-8 py-2 font-medium">
                    Conheça meu trabalho
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="servicos" className="w-full py-12 md:py-24 lg:py-32 bg-white/10 backdrop-blur-sm">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-center mb-8 text-white">
              Serviços
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg bg-white/20 backdrop-blur-sm shadow-xl">
                <Bot className="h-12 w-12 text-white" />
                <h3 className="text-xl font-bold text-white">Chatbots Inteligentes</h3>
                <p className="text-sm text-gray-100 text-center">
                  Desenvolvimento de chatbots avançados com IA para melhorar o atendimento ao cliente.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg bg-white/20 backdrop-blur-sm shadow-xl">
                <Zap className="h-12 w-12 text-white" />
                <h3 className="text-xl font-bold text-white">Automação de Processos</h3>
                <p className="text-sm text-gray-100 text-center">
                  Criação de soluções personalizadas para automatizar fluxos de trabalho e aumentar a eficiência.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg bg-white/20 backdrop-blur-sm shadow-xl">
                <Code className="h-12 w-12 text-white" />
                <h3 className="text-xl font-bold text-white">Integração de Sistemas</h3>
                <p className="text-sm text-gray-100 text-center">
                  Integração de sistemas existentes com novas tecnologias de IA para otimizar operações.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg bg-white/20 backdrop-blur-sm shadow-xl">
                <Monitor className="h-12 w-12 text-white" />
                <h3 className="text-xl font-bold text-white">Sistemas Desktop</h3>
                <p className="text-sm text-gray-100 text-center">
                  Desenvolvimento de aplicações desktop robustas e eficientes para necessidades específicas do seu
                  negócio.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg bg-white/20 backdrop-blur-sm shadow-xl">
                <Laptop className="h-12 w-12 text-white" />
                <h3 className="text-xl font-bold text-white">Sistemas Web</h3>
                <p className="text-sm text-gray-100 text-center">
                  Criação de sistemas online completos, seguros e escaláveis para gerenciar seu negócio na nuvem.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg bg-white/20 backdrop-blur-sm shadow-xl">
                <Globe className="h-12 w-12 text-white" />
                <h3 className="text-xl font-bold text-white">Sites e Landing Pages</h3>
                <p className="text-sm text-gray-100 text-center">
                  Design e desenvolvimento de sites modernos e landing pages de alta conversão para impulsionar seu
                  negócio.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-center mb-8 text-white">
              Portfólio
            </h2>
            <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg overflow-hidden shadow-xl bg-white/20 backdrop-blur-sm">
                <div className="w-full h-48 bg-gradient-to-r from-teal-500 to-teal-600 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <div className="text-2xl font-bold mb-2">ProART Diniz</div>
                    <div className="text-sm">Especialistas em ART</div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2 text-white">Luzana Diniz - ProART</h3>
                  <p className="text-gray-100 text-sm mb-3">
                    Site profissional para serviços de ART (Anotação de Responsabilidade Técnica) com design limpo e
                    moderno em tons de azul-verde.
                  </p>
                  <a
                    href="https://luzanadiniz.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white bg-purple-500/30 hover:bg-purple-500/50 px-3 py-1 rounded-md inline-flex items-center"
                  >
                    <Globe className="h-4 w-4 mr-1" /> Visitar site
                  </a>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl bg-white/20 backdrop-blur-sm">
                <div className="w-full h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <div className="text-2xl font-bold mb-2">Sistema de Etiquetas</div>
                    <div className="text-sm">Impressão de Etiquetas Térmicas</div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2 text-white">Sistema de Impressão de Etiquetas</h3>
                  <p className="text-gray-100 text-sm mb-3">
                    Aplicação desktop para impressão de etiquetas térmicas desenvolvida com Tauri, React e Next.js.
                    Solução multiplataforma com interface moderna.
                  </p>
                  <a
                    href="https://github.com/celsojuniorladislau/SistemaDeImpressaoDeEtiquetas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white bg-purple-500/30 hover:bg-purple-500/50 px-3 py-1 rounded-md inline-flex items-center mr-2"
                  >
                    <svg
                      className="h-4 w-4 mr-1"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    Ver no GitHub
                  </a>
                  <span className="text-xs text-gray-300 bg-white/10 px-2 py-1 rounded-md inline-flex items-center">
                   {latestVersion}
                  </span>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl bg-white/20 backdrop-blur-sm">
                <div className="w-full h-48 bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <div className="text-2xl font-bold mb-2">Chatbot IA</div>
                    <div className="text-sm">Atendimento Inteligente</div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2 text-white">Chatbot Inteligente</h3>
                  <p className="text-gray-100 text-sm">
                    Implementação de chatbot com IA para atendimento ao cliente, reduzindo tempo de resposta e
                    melhorando satisfação.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="w-full py-12 md:py-24 lg:py-32 bg-white/10 backdrop-blur-sm">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-center mb-12 text-white">
              Sobre Mim
            </h2>
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-2 flex justify-center">
                <div className="relative w-64 h-80 overflow-hidden rounded-lg shadow-xl">
                  <div className="absolute inset-0 bg-black/10 z-10"></div>
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/77860173.jfif-LBr14htEneXwgPS9E4BSqZTvs5NCSr.jpeg"
                    alt="Celso Ladislau Junior"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent z-20">
                    <h3 className="text-xl font-bold text-white">Celso Ladislau Junior</h3>
                    <p className="text-sm text-gray-200">Desenvolvedor Full Stack</p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-3 text-white">
                <p className="mb-4 text-lg">
                  Desenvolvedor especializado em criar soluções tecnológicas que transformam negócios. Com
                  experiência em desenvolvimento de sistemas, automação e inteligência artificial, trabalho para tornar
                  processos mais eficientes e melhorar a experiência dos usuários.
                </p>
                <p className="mb-6 text-lg">
                  Minha paixão está em combinar tecnologias modernas para criar soluções inovadoras que resolvem
                  problemas reais. Seja desenvolvendo chatbots inteligentes, sistemas desktop ou aplicações web, meu
                  foco é sempre entregar qualidade e resultados.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-2 text-blue-300" />
                    <span>celsojr.ladislau@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-blue-300" />
                    <span>2+ anos de experiência</span>
                  </div>
                  <div className="flex items-center">
                    <Code className="w-5 h-5 mr-2 text-blue-300" />
                    <span>Full Stack Developer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contato" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-center text-white mb-8">
              Pronto para começar?
            </h2>
            <div className="flex flex-col items-center justify-center">
              <p className="text-center text-white mb-6 max-w-2xl mx-auto">
                Entre em contato comigo para discutir seu projeto e criar soluções inovadoras juntos!
              </p>
              <a
                href="https://wa.me/5527992665692"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-purple-600 bg-white rounded-md shadow-md hover:bg-gray-100 transition-colors duration-300"
              >
                <svg
                  className="w-6 h-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Fale comigo no WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-white/10 bg-white/10 backdrop-blur-sm">
        <p className="text-xs text-gray-300">© 2024 Celso Ladislau Junior. Todos os direitos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs text-gray-300 hover:underline underline-offset-4" href="/termos">
            Termos de Serviço
          </Link>
          <Link className="text-xs text-gray-300 hover:underline underline-offset-4" href="/privacidade">
            Privacidade
          </Link>
        </nav>
      </footer>
    </div>
  )
}

