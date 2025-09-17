"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Header from "@/components/header"
import { Save, Bell, Lock, Mail, Phone, User, Settings } from "lucide-react"
import { useState } from "react"

export default function SettingsPage() {
  // Form states
  const [formData, setFormData] = useState({
    name: "João Silva",
    email: "joao.silva@empresa.com",
    phone: "(11) 99999-9999",
    department: "TI",
    position: "Analista de Segurança",
    emailNotifications: true,
    smsNotifications: false,
    weeklyReports: true,
    securityAlerts: true,
    twoFactorAuth: false,
    sessionTimeout: "30",
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSave = () => {
    console.log("[v0] Configurações salvas:", formData)
    // Aqui você pode adicionar lógica para salvar as configurações
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header showBackButton={true} />

      {/* Main Content */}
      <main className="p-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-green-500 mb-2">Configurações</h1>
          <p className="text-gray-400">Aqui você poderá alterar preferências, notificações e dados pessoais.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Dados Pessoais */}
          <Card className="bg-gray-900 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <User className="w-5 h-5 text-green-500" />
                Dados Pessoais
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-300">
                  Nome Completo
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="bg-gray-800 border-gray-600 text-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-300">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="bg-gray-800 border-gray-600 text-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-gray-300">
                  Telefone
                </Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="bg-gray-800 border-gray-600 text-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="department" className="text-gray-300">
                  Departamento
                </Label>
                <Input
                  id="department"
                  value={formData.department}
                  onChange={(e) => handleInputChange("department", e.target.value)}
                  className="bg-gray-800 border-gray-600 text-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="position" className="text-gray-300">
                  Cargo
                </Label>
                <Input
                  id="position"
                  value={formData.position}
                  onChange={(e) => handleInputChange("position", e.target.value)}
                  className="bg-gray-800 border-gray-600 text-white"
                />
              </div>
            </CardContent>
          </Card>

          {/* Notificações */}
          <Card className="bg-gray-900 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Bell className="w-5 h-5 text-green-500" />
                Notificações
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-gray-300 flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Notificações por Email
                  </Label>
                  <p className="text-sm text-gray-500">Receber alertas por email</p>
                </div>
                <Switch
                  checked={formData.emailNotifications}
                  onCheckedChange={(checked) => handleInputChange("emailNotifications", checked)}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-gray-300 flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Notificações por SMS
                  </Label>
                  <p className="text-sm text-gray-500">Receber alertas por SMS</p>
                </div>
                <Switch
                  checked={formData.smsNotifications}
                  onCheckedChange={(checked) => handleInputChange("smsNotifications", checked)}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-gray-300">Relatórios Semanais</Label>
                  <p className="text-sm text-gray-500">Resumo semanal de atividades</p>
                </div>
                <Switch
                  checked={formData.weeklyReports}
                  onCheckedChange={(checked) => handleInputChange("weeklyReports", checked)}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-gray-300">Alertas de Segurança</Label>
                  <p className="text-sm text-gray-500">Notificações de ameaças</p>
                </div>
                <Switch
                  checked={formData.securityAlerts}
                  onCheckedChange={(checked) => handleInputChange("securityAlerts", checked)}
                />
              </div>
            </CardContent>
          </Card>

          {/* Segurança */}
          <Card className="bg-gray-900 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Lock className="w-5 h-5 text-green-500" />
                Segurança
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-gray-300">Autenticação de Dois Fatores</Label>
                  <p className="text-sm text-gray-500">Adicionar camada extra de segurança</p>
                </div>
                <Switch
                  checked={formData.twoFactorAuth}
                  onCheckedChange={(checked) => handleInputChange("twoFactorAuth", checked)}
                />
              </div>
              <div className="space-y-2">
                <Label className="text-gray-300">Timeout da Sessão</Label>
                <Select
                  value={formData.sessionTimeout}
                  onValueChange={(value) => handleInputChange("sessionTimeout", value)}
                >
                  <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-600">
                    <SelectItem value="15">15 minutos</SelectItem>
                    <SelectItem value="30">30 minutos</SelectItem>
                    <SelectItem value="60">1 hora</SelectItem>
                    <SelectItem value="120">2 horas</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button
                variant="outline"
                className="w-full border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
              >
                Alterar Senha
              </Button>
            </CardContent>
          </Card>

          {/* Preferências */}
          <Card className="bg-gray-900 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Settings className="w-5 h-5 text-green-500" />
                Preferências
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label className="text-gray-300">Idioma</Label>
                <Select defaultValue="pt-br">
                  <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-600">
                    <SelectItem value="pt-br">Português (Brasil)</SelectItem>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Español</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="text-gray-300">Fuso Horário</Label>
                <Select defaultValue="america/sao_paulo">
                  <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-600">
                    <SelectItem value="america/sao_paulo">América/São Paulo</SelectItem>
                    <SelectItem value="america/new_york">América/Nova York</SelectItem>
                    <SelectItem value="europe/london">Europa/Londres</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Save Button */}
        <div className="mt-8 flex justify-end">
          <Button onClick={handleSave} className="bg-green-500 hover:bg-green-600 text-black font-bold px-8 py-2">
            <Save className="w-4 h-4 mr-2" />
            Salvar Configurações
          </Button>
        </div>
      </main>
    </div>
  )
}
