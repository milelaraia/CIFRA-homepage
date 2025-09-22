"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { StandardHeader } from "@/components/standard-header"
import { SimpleIcons } from "@/components/simple-icons"
import { useState } from "react"

export default function TrainingPage() {
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null)

  const handleLessonClick = (lessonId: string) => {
    setSelectedLesson(lessonId)
    console.log(`[v0] Lição selecionada: ${lessonId}`)
  }

  const modules = [
    {
      id: "phishing-basics",
      title: "Fundamentos do Phishing",
      summary: "Aprenda os conceitos básicos sobre ataques de phishing e como identificá-los",
      lessons: [
        { id: "what-is-phishing", title: "O que é Phishing?", date: "15/12/2024" },
        { id: "types-of-phishing", title: "Tipos de Ataques de Phishing", date: "14/12/2024" },
        { id: "red-flags", title: "Sinais de Alerta", date: "13/12/2024" },
      ],
    },
    {
      id: "email-security",
      title: "Segurança de Email",
      summary: "Técnicas para identificar emails maliciosos e proteger sua caixa de entrada",
      lessons: [
        { id: "email-headers", title: "Analisando Cabeçalhos de Email", date: "12/12/2024" },
        { id: "suspicious-attachments", title: "Anexos Suspeitos", date: "11/12/2024" },
        { id: "link-verification", title: "Verificação de Links", date: "10/12/2024" },
      ],
    },
    {
      id: "social-engineering",
      title: "Engenharia Social",
      summary: "Compreenda as táticas psicológicas usadas por atacantes",
      lessons: [
        { id: "psychology-attacks", title: "Psicologia dos Ataques", date: "09/12/2024" },
        { id: "pretexting", title: "Pretexting e Manipulação", date: "08/12/2024" },
        { id: "urgency-tactics", title: "Táticas de Urgência", date: "07/12/2024" },
      ],
    },
  ]

  const simulations = [
    {
      id: "email-sim-1",
      title: "Simulação de Email Phishing",
      type: "Email",
      description: "Pratique identificando emails de phishing em um ambiente seguro",
    },
    {
      id: "website-sim-1",
      title: "Site Falso de Banco",
      type: "Website",
      description: "Aprenda a identificar sites fraudulentos que imitam bancos",
    },
    {
      id: "quiz-1",
      title: "Quiz de Conhecimentos",
      type: "Quiz",
      description: "Teste seus conhecimentos sobre segurança cibernética",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <StandardHeader showBackButton={true} />

      {/* Main Content */}
      <main className="p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div className="mb-4 md:mb-0">
              <h1 className="text-4xl font-bold text-green-500 mb-2">Treinamento C.I.F.R.A</h1>
              <p className="text-gray-300 text-lg max-w-3xl">
                Bem-vindo à seção de treinamento da plataforma <strong className="text-green-500">C.I.F.R.A</strong> —
                Checagem Inteligente de Fraudes e Ameaças. Aqui você encontrará módulos com conteúdo teórico e prático
                para melhorar sua postura de segurança.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content - Modules and Lessons */}
            <div className="lg:col-span-2 space-y-8">
              {/* Available Modules */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-6">Módulos Disponíveis</h2>
                <div className="space-y-4">
                  {modules.map((module) => (
                    <Card key={module.id} className="bg-gray-800 border-gray-700">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-white mb-2">{module.title}</h3>
                            <p className="text-gray-400 text-sm">{module.summary}</p>
                          </div>
                          <Badge variant="secondary" className="bg-green-500 text-black">
                            {module.lessons.length} lições
                          </Badge>
                        </div>

                        <div className="space-y-2">
                          {module.lessons.map((lesson) => (
                            <div
                              key={lesson.id}
                              className="flex items-center justify-between p-3 bg-gray-700 rounded-lg hover:bg-gray-600 cursor-pointer transition-colors lesson-link"
                              onClick={() => handleLessonClick(lesson.id)}
                              data-module-slug={module.id}
                              data-lesson-slug={lesson.id}
                            >
                              <div className="flex items-center gap-3">
                                <SimpleIcons.BookOpen className="w-4 h-4 text-green-500" />
                                <div>
                                  <div className="text-white font-medium">{lesson.title}</div>
                                  <div className="text-gray-400 text-sm">Atualizado: {lesson.date}</div>
                                </div>
                              </div>
                              <SimpleIcons.ExternalLink className="w-4 h-4 text-gray-400" />
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Practice Section */}
              <section>
                <h3 className="text-2xl font-bold text-white mb-4">Pratique</h3>
                <p className="text-gray-300 mb-6">
                  Coloque seus conhecimentos em prática com exercícios e simulações interativas.
                </p>

                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <SimpleIcons.Target className="w-5 h-5 text-green-500" />
                      Simulações
                    </CardTitle>
                    <p className="text-gray-400 text-sm">Emails, sites falsos e quizzes. Abra para praticar.</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {simulations.map((sim) => (
                        <div
                          key={sim.id}
                          className="flex items-center justify-between p-4 bg-gray-700 rounded-lg hover:bg-gray-600 cursor-pointer transition-colors lesson-link"
                          data-module-slug="simulations"
                          data-lesson-slug={sim.id}
                        >
                          <div className="flex items-center gap-3">
                            {sim.type === "Email" && <SimpleIcons.Mail className="w-5 h-5 text-blue-500" />}
                            {sim.type === "Website" && <SimpleIcons.ExternalLink className="w-5 h-5 text-orange-500" />}
                            {sim.type === "Quiz" && <SimpleIcons.Target className="w-5 h-5 text-purple-500" />}
                            <div>
                              <div className="text-white font-medium">{sim.title}</div>
                              <Badge variant="outline" className="text-xs mt-1">
                                {sim.type}
                              </Badge>
                              <div className="text-gray-400 text-sm mt-1">{sim.description}</div>
                            </div>
                          </div>
                          <SimpleIcons.ExternalLink className="w-4 h-4 text-gray-400" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Educational Material */}
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <SimpleIcons.BookOpen className="w-5 h-5 text-green-500" />
                    Material Didático
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm mb-4">Baixe os materiais complementares para estudo offline.</p>
                  <Button
                    variant="outline"
                    size="sm"
                    disabled
                    className="w-full mb-3 border-gray-600 text-gray-400 bg-transparent"
                  >
                    <SimpleIcons.BookOpen className="w-4 h-4 mr-2" />
                    Guia Completo (em breve)
                  </Button>
                  <p className="text-gray-400 text-xs">Se desejar, envie materiais ao administrador para inclusão.</p>
                </CardContent>
              </Card>

              {/* Introduction Video */}
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <SimpleIcons.BookOpen className="w-5 h-5 text-green-500" />
                    Vídeo de Introdução
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm mb-3">
                    Assista a uma breve introdução sobre os objetivos do treinamento.
                  </p>
                  <div className="flex items-center gap-2 text-gray-400 text-xs">
                    <SimpleIcons.Clock className="w-3 h-3" />
                    Duração estimada: 5 minutos
                  </div>
                </CardContent>
              </Card>

              {/* Support */}
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <SimpleIcons.Users className="w-5 h-5 text-green-500" />
                    Suporte
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm mb-3">
                    Dúvidas? Reporte incidentes ou solicite suporte ao time de segurança.
                  </p>
                  <a
                    href="mailto:seguranca@empresa.com"
                    className="text-green-500 hover:text-green-400 text-sm underline"
                  >
                    seguranca@empresa.com
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
