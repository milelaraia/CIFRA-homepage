"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

export default function RegisterPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
    role: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Registering user:", formData)
    // Redirect to login after successful registration
    router.push("/login")
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-2xl font-bold text-green-400">
              CIFRA
            </Link>
          </div>
          <nav className="flex items-center space-x-6">
            <Link href="/" className="hover:text-green-400 transition-colors">
              Início
            </Link>
            <Link href="/login" className="hover:text-green-400 transition-colors">
              Login
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex items-center justify-center min-h-[calc(100vh-80px)] p-4">
        <div className="w-full max-w-md">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-white mb-2">Criar Conta</CardTitle>
              <p className="text-gray-400">Cadastre-se no sistema CIFRA</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="username" className="text-gray-300">
                    Usuário
                  </Label>
                  <Input
                    id="username"
                    type="text"
                    value={formData.username}
                    onChange={(e) => handleInputChange("username", e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-400"
                    placeholder="Digite seu nome de usuário"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-300">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-400"
                    placeholder="Digite seu email"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="password1" className="text-gray-300">
                    Senha
                  </Label>
                  <Input
                    id="password1"
                    type="password"
                    value={formData.password1}
                    onChange={(e) => handleInputChange("password1", e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-400"
                    placeholder="Digite sua senha"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="password2" className="text-gray-300">
                    Confirmar Senha
                  </Label>
                  <Input
                    id="password2"
                    type="password"
                    value={formData.password2}
                    onChange={(e) => handleInputChange("password2", e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-400"
                    placeholder="Confirme sua senha"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="role" className="text-gray-300">
                    Tipo de Conta
                  </Label>
                  <Select onValueChange={(value) => handleInputChange("role", value)}>
                    <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                      <SelectValue placeholder="Selecione o tipo de conta" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-700 border-gray-600">
                      <SelectItem value="funcionario" className="text-white hover:bg-gray-600">
                        Funcionário
                      </SelectItem>
                      <SelectItem value="admin" className="text-white hover:bg-gray-600">
                        Admin TI
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-sm text-gray-400 mt-1">
                    <strong>Funcionário:</strong> acesso aos treinamentos.
                    <br />
                    <strong>Admin TI:</strong> acesso aos relatórios e gerenciamento.
                  </p>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition-colors"
                >
                  Registrar
                </Button>
              </form>

              <div className="text-center mt-4">
                <p className="text-gray-400">
                  Já possui conta?{" "}
                  <Link href="/login" className="text-green-400 hover:text-green-300 transition-colors">
                    Entre aqui
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
