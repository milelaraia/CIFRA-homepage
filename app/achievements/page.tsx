"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import { Trophy, Shield, Star, Zap, CheckCircle } from "lucide-react"

export default function AchievementsPage() {
  // Mock data for achievements
  const achievements = [
    {
      id: 1,
      name: "Primeiro Passo",
      description: "Completou o primeiro módulo de treinamento",
      date: "15/12/2024",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "bg-green-500",
    },
    {
      id: 2,
      name: "Detector de Phishing",
      description: "Identificou corretamente 10 emails de phishing",
      date: "10/12/2024",
      icon: <Shield className="w-6 h-6" />,
      color: "bg-blue-500",
    },
    {
      id: 3,
      name: "Especialista em Segurança",
      description: "Completou todos os módulos básicos",
      date: "05/12/2024",
      icon: <Trophy className="w-6 h-6" />,
      color: "bg-yellow-500",
    },
    {
      id: 4,
      name: "Guardião Digital",
      description: "Passou em 5 simulações consecutivas",
      date: "01/12/2024",
      icon: <Star className="w-6 h-6" />,
      color: "bg-purple-500",
    },
    {
      id: 5,
      name: "Velocista",
      description: "Completou um módulo em menos de 10 minutos",
      date: "28/11/2024",
      icon: <Zap className="w-6 h-6" />,
      color: "bg-orange-500",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Header showBackButton={true} />

      {/* Main Content */}
      <main className="p-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-green-500 mb-2">Conquistas</h1>
          <p className="text-gray-400">Acompanhe seu progresso e celebre suas conquistas no treinamento CIFRA</p>
        </div>

        {/* Achievements List */}
        <div className="space-y-4">
          {achievements.length > 0 ? (
            achievements.map((achievement) => (
              <Card
                key={achievement.id}
                className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className={`${achievement.color} p-3 rounded-full text-white`}>{achievement.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-1">{achievement.name}</h3>
                      <p className="text-gray-400 mb-2">{achievement.description}</p>
                      <span className="text-sm text-gray-500">Conquistado em {achievement.date}</span>
                    </div>
                    <Badge variant="secondary" className="bg-green-500 text-black">
                      <Trophy className="w-3 h-3 mr-1" />
                      Desbloqueado
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-8 text-center">
                <Trophy className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-400 mb-2">Nenhuma conquista ainda</h3>
                <p className="text-gray-500">
                  Complete treinamentos e simulações para desbloquear suas primeiras conquistas!
                </p>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Stats Summary */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-gray-400">Total de Conquistas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-500">{achievements.length}</div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-gray-400">Pontos Totais</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-yellow-500">360</div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-gray-400">Nível Atual</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-500">Intermediário</div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
