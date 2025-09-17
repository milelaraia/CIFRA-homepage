"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function AboutPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-gray-900 border-b border-gray-800">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white" onClick={() => router.back()}>
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 border-2 border-green-500 rounded flex items-center justify-center">
              <Shield className="w-4 h-4 text-green-500" />
            </div>
            <span className="text-green-500 font-bold text-lg">CIFRA</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6 max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-green-500 mb-6">Sobre o Sistema</h1>
          </div>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 border-2 border-green-500 rounded-lg flex items-center justify-center">
                    <Shield className="w-8 h-8 text-green-500" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">C.I.F.R.A</h2>
                    <p className="text-gray-400">Checagem Inteligente de Fraudes e Ameaças</p>
                  </div>
                </div>

                <div className="prose prose-invert max-w-none">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    O C.I.F.R.A é um sistema gamificado de treinamento em cibersegurança para empresas e usuários, com
                    foco em simulação de ataques e análise de respostas para promover educação e conscientização.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-green-500">Nossa Missão</h3>
                    <p className="text-gray-300">
                      Capacitar organizações e indivíduos com conhecimento prático em cibersegurança através de
                      treinamentos interativos e simulações realistas de ataques de phishing.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-green-500">Metodologia</h3>
                    <p className="text-gray-300">
                      Utilizamos gamificação e análise comportamental para criar experiências de aprendizado envolventes
                      que preparam os usuários para identificar e responder adequadamente a ameaças reais.
                    </p>
                  </div>
                </div>

                <div className="border-t border-gray-800 pt-6 mt-8">
                  <h3 className="text-xl font-semibold text-green-500 mb-4">Recursos Principais</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <h4 className="font-semibold text-white mb-2">Simulações Realistas</h4>
                      <p className="text-sm text-gray-400">Cenários baseados em ataques reais do mundo corporativo</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <h4 className="font-semibold text-white mb-2">Sistema de Pontuação</h4>
                      <p className="text-sm text-gray-400">Gamificação com rankings e conquistas motivacionais</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <h4 className="font-semibold text-white mb-2">Relatórios Detalhados</h4>
                      <p className="text-sm text-gray-400">Análise completa do progresso e áreas de melhoria</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
