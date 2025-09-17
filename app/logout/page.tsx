"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, User, Home, MoreHorizontal, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function LogoutPage() {
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
          <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
            <User className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
            <MoreHorizontal className="w-4 h-4" />
          </Button>
          <Link href="/">
            <Button variant="ghost" size="sm" className="text-green-500 hover:text-green-400">
              <Home className="w-4 h-4" />
              <span className="ml-1 text-xs">HOME</span>
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex items-center justify-center min-h-[calc(100vh-80px)] p-6">
        <div className="w-full max-w-md">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-black" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold text-green-500">Logout Realizado</CardTitle>
              <p className="text-gray-400 text-sm">Você saiu do sistema com sucesso.</p>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-gray-300">
                Sua sessão foi encerrada de forma segura. Obrigado por usar o sistema de treinamento CIFRA.
              </p>

              <div className="space-y-3">
                <Link href="/login">
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-black font-bold py-3 transition-all duration-200 transform hover:scale-105">
                    Fazer Login Novamente
                  </Button>
                </Link>

                <Link href="/">
                  <Button
                    variant="outline"
                    className="w-full border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white bg-transparent"
                  >
                    Voltar ao Início
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
