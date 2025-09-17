"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Shield, User, Home, MoreHorizontal } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Login attempt:", { email, password })
    // Aqui você pode adicionar a lógica de autenticação
  }

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
              <CardTitle className="text-2xl font-bold text-green-500">Login</CardTitle>
              <p className="text-gray-400 text-sm">Acesse sua conta para continuar o treinamento</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-300">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white focus:border-green-500 focus:ring-green-500"
                    placeholder="seu@email.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-gray-300">
                    Senha
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white focus:border-green-500 focus:ring-green-500"
                    placeholder="••••••••"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-black font-bold py-3 transition-all duration-200 transform hover:scale-105"
                >
                  Entrar
                </Button>
              </form>

              <div className="mt-6 text-center">
                <Link href="/register" className="text-green-500 hover:text-green-400 text-sm underline">
                  Não tem uma conta? Registrar-se
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
