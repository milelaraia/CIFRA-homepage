"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Trophy,
  Shield,
  Flame,
  Target,
  User,
  Home,
  MoreHorizontal,
  Settings,
  BookOpen,
  Award,
  BarChart3,
  LogOut,
  History,
  ArrowLeft,
  Star,
  TrendingUp,
  CheckCircle,
} from "lucide-react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function ProfilePage() {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (!target.closest("[data-dropdown]")) {
        setIsOptionsOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [])

  const handleOptionsClick = () => {
    setIsOptionsOpen(!isOptionsOpen)
  }

  const handleOptionSelect = (option: string) => {
    setIsOptionsOpen(false)
    if (option === "Ranking") {
      router.push("/ranking")
    }
    if (option === "Sistema de Pontos") {
      router.push("/achievements")
    }
    if (option === "Configurações de Perfil") {
      router.push("/settings")
    }
    if (option === "Histórico de Tentativas") {
      router.push("/attempts")
    }
  }

  const handleLogout = () => {
    setIsOptionsOpen(false)
    router.push("/login")
  }

  const handleBackToHome = () => {
    router.push("/")
  }

  // Mock user data
  const userData = {
    nickname: "CyberGuardian",
    email: "usuario@empresa.com",
    joinDate: "Janeiro 2024",
    currentRank: 3,
    totalUsers: 150,
    points: 360,
    level: 5,
    completedTrainings: 12,
    totalTrainings: 20,
    successRate: 85,
    streak: 7,
  }

  const recentAchievements = [
    { name: "Primeiro Treinamento", icon: Trophy, color: "bg-yellow-500" },
    { name: "Defensor", icon: Shield, color: "bg-red-500" },
    { name: "Sequência de 5", icon: Flame, color: "bg-orange-500" },
    { name: "Precisão", icon: Target, color: "bg-green-500" },
  ]

  const trainingProgress = [
    { name: "Phishing Básico", completed: true, score: 95 },
    { name: "Engenharia Social", completed: true, score: 88 },
    { name: "Malware", completed: true, score: 92 },
    { name: "Senhas Seguras", completed: false, score: 0 },
    { name: "Wi-Fi Seguro", completed: false, score: 0 },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-gray-900 border-b border-gray-800">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white" onClick={handleBackToHome}>
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 border-2 border-green-500 rounded flex items-center justify-center">
              <Shield className="w-4 h-4 text-green-500" />
            </div>
            <span className="text-green-500 font-bold text-lg">CIFRA</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="text-green-500 hover:text-green-400">
            <User className="w-4 h-4" />
          </Button>
          <div className="relative" data-dropdown>
            <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white" onClick={handleOptionsClick}>
              <MoreHorizontal className="w-4 h-4" />
            </Button>
            {isOptionsOpen && (
              <div className="absolute right-0 top-full mt-2 w-56 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-50">
                <div className="py-2">
                  <button
                    onClick={() => handleOptionSelect("Configurações de Perfil")}
                    className="w-full px-4 py-2 text-left text-sm text-gray-300 hover:bg-gray-700 hover:text-white flex items-center gap-3"
                  >
                    <Settings className="w-4 h-4" />
                    Configurações de Perfil
                  </button>
                  <button
                    onClick={() => handleOptionSelect("Material Didático")}
                    className="w-full px-4 py-2 text-left text-sm text-gray-300 hover:bg-gray-700 hover:text-white flex items-center gap-3"
                  >
                    <BookOpen className="w-4 h-4" />
                    Material Didático
                  </button>
                  <button
                    onClick={() => handleOptionSelect("Sistema de Pontos")}
                    className="w-full px-4 py-2 text-left text-sm text-gray-300 hover:bg-gray-700 hover:text-white flex items-center gap-3"
                  >
                    <Award className="w-4 h-4" />
                    Sistema de Pontos
                  </button>
                  <button
                    onClick={() => handleOptionSelect("Ranking")}
                    className="w-full px-4 py-2 text-left text-sm text-gray-300 hover:bg-gray-700 hover:text-white flex items-center gap-3"
                  >
                    <BarChart3 className="w-4 h-4" />
                    Ranking
                  </button>
                  <button
                    onClick={() => handleOptionSelect("Histórico de Tentativas")}
                    className="w-full px-4 py-2 text-left text-sm text-gray-300 hover:bg-gray-700 hover:text-white flex items-center gap-3"
                  >
                    <History className="w-4 h-4" />
                    Histórico de Tentativas
                  </button>
                  <div className="border-t border-gray-700 my-2"></div>
                  <button
                    onClick={handleLogout}
                    className="w-full px-4 py-2 text-left text-sm text-red-400 hover:bg-gray-700 hover:text-red-300 flex items-center gap-3"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
          <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white" onClick={handleBackToHome}>
            <Home className="w-4 h-4" />
            <span className="ml-1 text-xs">HOME</span>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6 space-y-8">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center">
            <User className="w-12 h-12 text-gray-400" />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold text-green-500 mb-2">{userData.nickname}</h1>
            <p className="text-gray-400 mb-1">{userData.email}</p>
            <p className="text-gray-500 text-sm">Membro desde {userData.joinDate}</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-green-500 mb-2">#{userData.currentRank}</div>
              <div className="text-sm text-gray-400">Posição no Ranking</div>
              <div className="text-xs text-gray-500 mt-1">de {userData.totalUsers} usuários</div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-yellow-500 mb-2">{userData.points}</div>
              <div className="text-sm text-gray-400">Pontos Totais</div>
              <div className="text-xs text-gray-500 mt-1">Nível {userData.level}</div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-blue-500 mb-2">{userData.completedTrainings}</div>
              <div className="text-sm text-gray-400">Treinamentos</div>
              <div className="text-xs text-gray-500 mt-1">de {userData.totalTrainings} concluídos</div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-orange-500 mb-2">{userData.streak}</div>
              <div className="text-sm text-gray-400">Sequência</div>
              <div className="text-xs text-gray-500 mt-1">dias consecutivos</div>
            </CardContent>
          </Card>
        </div>

        {/* Progress and Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Training Progress */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-500" />
                Progresso nos Treinamentos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Progresso Geral</span>
                  <span className="text-green-500">
                    {Math.round((userData.completedTrainings / userData.totalTrainings) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(userData.completedTrainings / userData.totalTrainings) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="space-y-3">
                {trainingProgress.map((training, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                    <div className="flex items-center gap-3">
                      {training.completed ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : (
                        <div className="w-5 h-5 border-2 border-gray-600 rounded-full" />
                      )}
                      <span className={`text-sm ${training.completed ? "text-white" : "text-gray-400"}`}>
                        {training.name}
                      </span>
                    </div>
                    {training.completed && (
                      <Badge variant="secondary" className="bg-green-500 text-black">
                        {training.score}%
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Achievements */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                Conquistas Recentes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {recentAchievements.map((achievement, index) => (
                  <div key={index} className="flex flex-col items-center p-4 bg-gray-800 rounded-lg">
                    <div
                      className={`w-12 h-12 ${achievement.color} rounded-full flex items-center justify-center mb-2`}
                    >
                      <achievement.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xs text-gray-300 text-center">{achievement.name}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gray-800 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">Taxa de Sucesso</span>
                  <span className="text-green-500 font-bold">{userData.successRate}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${userData.successRate}%` }}
                  ></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
