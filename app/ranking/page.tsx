"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import { BarChart3, Trophy, Medal, Crown } from "lucide-react"

export default function RankingPage() {
  // Mock data for ranking
  const rankingData = [
    { username: "Ana Silva", score: 850, position: 1 },
    { username: "Carlos Santos", score: 720, position: 2 },
    { username: "Maria Oliveira", score: 680, position: 3 },
    { username: "João Pereira", score: 620, position: 4 },
    { username: "Fernanda Costa", score: 580, position: 5 },
    { username: "Ricardo Lima", score: 540, position: 6 },
    { username: "Juliana Rocha", score: 500, position: 7 },
    { username: "Pedro Alves", score: 460, position: 8 },
    { username: "Camila Ferreira", score: 420, position: 9 },
    { username: "Lucas Martins", score: 380, position: 10 },
  ]

  const getRankIcon = (position: number) => {
    switch (position) {
      case 1:
        return <Crown className="w-5 h-5 text-yellow-500" />
      case 2:
        return <Medal className="w-5 h-5 text-gray-400" />
      case 3:
        return <Medal className="w-5 h-5 text-amber-600" />
      default:
        return <Trophy className="w-4 h-4 text-gray-500" />
    }
  }

  const getRankBadgeColor = (position: number) => {
    switch (position) {
      case 1:
        return "bg-yellow-500 text-black"
      case 2:
        return "bg-gray-400 text-black"
      case 3:
        return "bg-amber-600 text-white"
      default:
        return "bg-gray-600 text-white"
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header showBackButton={true} />

      {/* Main Content */}
      <main className="p-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-green-500 mb-2">Ranking de Usuários</h1>
          <p className="text-gray-400">Veja como você se compara com outros usuários do sistema CIFRA</p>
        </div>

        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-green-500" />
              Classificação Geral
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {rankingData.length > 0 ? (
                rankingData.map((user) => (
                  <div
                    key={user.position}
                    className={`flex items-center justify-between p-4 rounded-lg border transition-all duration-200 hover:bg-gray-800 ${
                      user.position <= 3 ? "border-green-500/30 bg-gray-800/50" : "border-gray-700 bg-gray-800/20"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <Badge className={`${getRankBadgeColor(user.position)} font-bold min-w-[2rem] justify-center`}>
                        {user.position}
                      </Badge>
                      <div className="flex items-center gap-2">
                        {getRankIcon(user.position)}
                        <span className="text-white font-medium">{user.username}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-green-500 font-bold text-lg">{user.score}</div>
                      <div className="text-gray-400 text-sm">pontos</div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-gray-400">
                  <BarChart3 className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Nenhum usuário no ranking ainda.</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Top 3 Highlight */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {rankingData.slice(0, 3).map((user, index) => (
            <Card key={user.position} className="bg-gray-900 border-gray-800 text-center">
              <CardContent className="p-6">
                <div className="mb-4">
                  {index === 0 && <Crown className="w-8 h-8 text-yellow-500 mx-auto" />}
                  {index === 1 && <Medal className="w-8 h-8 text-gray-400 mx-auto" />}
                  {index === 2 && <Medal className="w-8 h-8 text-amber-600 mx-auto" />}
                </div>
                <h3 className="text-white font-bold mb-2">{user.username}</h3>
                <p className="text-green-500 text-2xl font-bold">{user.score}</p>
                <p className="text-gray-400 text-sm">pontos</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
