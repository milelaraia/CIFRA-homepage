"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Home, CheckCircle, XCircle, Calendar, Target, TrendingUp, Clock } from "lucide-react"
import { useRouter } from "next/navigation"

// Mock data for attempts
const mockAttempts = [
  {
    id: 1,
    training: "Reconhecimento de E-mails Suspeitos",
    date: "15/12/2024 14:30",
    isCorrect: true,
    score: 25,
    type: "Simulação",
  },
  {
    id: 2,
    training: "Links Maliciosos",
    date: "14/12/2024 09:15",
    isCorrect: false,
    score: -10,
    type: "Quiz",
  },
  {
    id: 3,
    training: "Anexos Perigosos",
    date: "13/12/2024 16:45",
    isCorrect: true,
    score: 30,
    type: "Simulação",
  },
  {
    id: 4,
    training: "Engenharia Social",
    date: "12/12/2024 11:20",
    isCorrect: true,
    score: 20,
    type: "Prática",
  },
  {
    id: 5,
    training: "Verificação de Remetentes",
    date: "11/12/2024 13:10",
    isCorrect: false,
    score: -5,
    type: "Quiz",
  },
  {
    id: 6,
    training: "Phishing por SMS",
    date: "10/12/2024 10:30",
    isCorrect: true,
    score: 15,
    type: "Simulação",
  },
]

export default function AttemptsPage() {
  const router = useRouter()

  const totalAttempts = mockAttempts.length
  const correctAttempts = mockAttempts.filter((attempt) => attempt.isCorrect).length
  const totalScore = mockAttempts.reduce((sum, attempt) => sum + attempt.score, 0)
  const successRate = Math.round((correctAttempts / totalAttempts) * 100)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-gray-900 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 border-2 border-green-500 rounded flex items-center justify-center">
            <Shield className="w-4 h-4 text-green-500" />
          </div>
          <span className="text-green-500 font-bold text-lg">CIFRA</span>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            className="text-green-500 hover:text-green-400"
            onClick={() => router.push("/")}
          >
            <Home className="w-4 h-4" />
            <span className="ml-1 text-xs">HOME</span>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6 space-y-8">
        {/* Page Title */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-green-500 mb-2">Histórico de Tentativas</h1>
          <p className="text-gray-400">Acompanhe seu progresso e desempenho nos treinamentos</p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6 text-center">
              <Target className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">{totalAttempts}</div>
              <div className="text-sm text-gray-400">Total de Tentativas</div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6 text-center">
              <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">{correctAttempts}</div>
              <div className="text-sm text-gray-400">Acertos</div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6 text-center">
              <TrendingUp className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">{successRate}%</div>
              <div className="text-sm text-gray-400">Taxa de Sucesso</div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6 text-center">
              <TrendingUp className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">{totalScore}</div>
              <div className="text-sm text-gray-400">Pontos Totais</div>
            </CardContent>
          </Card>
        </div>

        {/* Attempts Table */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Clock className="w-5 h-5 text-green-500" />
              Histórico Detalhado
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-3 px-4 text-gray-300 font-semibold">Treinamento</th>
                    <th className="text-left py-3 px-4 text-gray-300 font-semibold">Tipo</th>
                    <th className="text-left py-3 px-4 text-gray-300 font-semibold">Data</th>
                    <th className="text-center py-3 px-4 text-gray-300 font-semibold">Resultado</th>
                    <th className="text-center py-3 px-4 text-gray-300 font-semibold">Pontuação</th>
                  </tr>
                </thead>
                <tbody>
                  {mockAttempts.length > 0 ? (
                    mockAttempts.map((attempt) => (
                      <tr key={attempt.id} className="border-b border-gray-700 hover:bg-gray-700/50">
                        <td className="py-4 px-4 text-white">{attempt.training}</td>
                        <td className="py-4 px-4">
                          <Badge
                            variant="secondary"
                            className={`
                              ${attempt.type === "Simulação" ? "bg-blue-500 text-white" : ""}
                              ${attempt.type === "Quiz" ? "bg-purple-500 text-white" : ""}
                              ${attempt.type === "Prática" ? "bg-orange-500 text-white" : ""}
                            `}
                          >
                            {attempt.type}
                          </Badge>
                        </td>
                        <td className="py-4 px-4 text-gray-300 flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {attempt.date}
                        </td>
                        <td className="py-4 px-4 text-center">
                          {attempt.isCorrect ? (
                            <div className="flex items-center justify-center gap-1 text-green-500">
                              <CheckCircle className="w-5 h-5" />
                              <span className="text-sm font-semibold">Correto</span>
                            </div>
                          ) : (
                            <div className="flex items-center justify-center gap-1 text-red-500">
                              <XCircle className="w-5 h-5" />
                              <span className="text-sm font-semibold">Incorreto</span>
                            </div>
                          )}
                        </td>
                        <td className="py-4 px-4 text-center">
                          <span className={`font-bold ${attempt.score > 0 ? "text-green-500" : "text-red-500"}`}>
                            {attempt.score > 0 ? "+" : ""}
                            {attempt.score}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="py-8 px-4 text-center text-gray-400">
                        Nenhuma tentativa registrada.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
