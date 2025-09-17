"use client"

import { Button } from "@/components/ui/button"
import {
  Shield,
  User,
  Home,
  MoreHorizontal,
  Settings,
  Award,
  BarChart3,
  LogOut,
  History,
  Info,
  ArrowLeft,
} from "lucide-react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

interface HeaderProps {
  showBackButton?: boolean
}

export default function Header({ showBackButton = false }: HeaderProps) {
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
    if (option === "Sobre Nós") {
      router.push("/about")
    }
  }

  const handleLogout = () => {
    setIsOptionsOpen(false)
    router.push("/login")
  }

  const handleBack = () => {
    router.back()
  }

  return (
    <header className="flex items-center justify-between p-4 bg-gray-900 border-b border-gray-800">
      <div className="flex items-center gap-4">
        {showBackButton && (
          <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white" onClick={handleBack}>
            <ArrowLeft className="w-4 h-4" />
          </Button>
        )}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 border-2 border-green-500 rounded flex items-center justify-center">
            <Shield className="w-4 h-4 text-green-500" />
          </div>
          <span className="text-green-500 font-bold text-lg">CIFRA</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="sm"
          className="text-gray-300 hover:text-white"
          onClick={() => router.push("/profile")}
        >
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
                  onClick={() => handleOptionSelect("Sobre Nós")}
                  className="w-full px-4 py-2 text-left text-sm text-gray-300 hover:bg-gray-700 hover:text-white flex items-center gap-3"
                >
                  <Info className="w-4 h-4" />
                  Sobre Nós
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
  )
}
