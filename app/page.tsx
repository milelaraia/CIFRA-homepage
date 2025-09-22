"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { StandardHeader } from "@/components/standard-header"
import { SimpleIcons } from "@/components/simple-icons"
import { useRouter } from "next/navigation"

export default function HomePage() {
  const router = useRouter()

  const handleChallengeClick = () => {
    console.log("[v0] Desafio mensal clicado")
    // Aqui você pode adicionar navegação para página de desafios
  }

  const handleScoreClick = () => {
    console.log("[v0] Pontuação clicada")
    router.push("/achievements")
  }

  const handleStartTraining = () => {
    router.push("/training")
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <StandardHeader />

      {/* Main Content */}
      <main className="p-6 space-y-8">
        {/* Hero Section */}
        <div className="space-y-8">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold text-green-500 leading-tight mb-8">
              Segurança contra phishing é mais do que treinamento, é proteção inteligente.
            </h1>

            <div className="flex justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-black font-bold px-12 py-6 text-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                onClick={handleStartTraining}
              >
                INICIAR TREINAMENTO
              </Button>
            </div>
          </div>

          {/* Monthly Challenge and Score and Achievements */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-end">
            {/* Monthly Challenge */}
            <Button
              variant="ghost"
              className="p-0 h-auto bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-600 transition-all duration-200 transform hover:scale-105"
              onClick={handleChallengeClick}
            >
              <Card className="bg-transparent border-none w-64">
                <CardContent className="p-4 text-center">
                  <div className="text-sm font-semibold text-white mb-3">DESAFIO MENSAL</div>
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto">
                    <SimpleIcons.Trophy className="w-6 h-6 text-black" />
                  </div>
                </CardContent>
              </Card>
            </Button>

            {/* Score and Achievements */}
            <Button
              variant="ghost"
              className="p-0 h-auto bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-600 transition-all duration-200 transform hover:scale-105"
              onClick={handleScoreClick}
            >
              <Card className="bg-transparent border-none w-64">
                <CardContent className="p-4 text-center">
                  <div className="text-sm text-gray-400 mb-2">PONTUAÇÃO</div>
                  <div className="text-3xl font-bold text-white mb-3">360</div>
                  <div className="text-xs text-gray-400 mb-3">Progresso</div>

                  <div className="mb-4">
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${Math.min((360 / 500) * 100, 100)}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-400 mt-1">360 / 500 pontos</div>
                  </div>

                  <div className="border-t border-gray-700 pt-3">
                    <div className="text-xs text-gray-400 mb-2">CONQUISTAS</div>
                    <div className="flex justify-center gap-2">
                      <Badge variant="secondary" className="bg-yellow-500 text-black p-1">
                        <SimpleIcons.Trophy className="w-3 h-3" />
                      </Badge>
                      <Badge variant="secondary" className="bg-red-500 text-white p-1">
                        <SimpleIcons.Shield className="w-3 h-3" />
                      </Badge>
                      <Badge variant="secondary" className="bg-orange-500 text-white p-1">
                        <SimpleIcons.Flame className="w-3 h-3" />
                      </Badge>
                      <Badge variant="secondary" className="bg-green-500 text-black p-1">
                        <SimpleIcons.Target className="w-3 h-3" />
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Button>
          </div>
        </div>

        {/* Company Notice */}
        <div className="max-w-md">
          <Card className="bg-green-500 border-green-400">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 text-black">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="font-semibold">LEMBRETE REUNIÃO</span>
              </div>
              <p className="text-black/80 mt-2 text-sm">
                Reunião de segurança agendada para amanhã às 14h. Não esqueça de participar!
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
