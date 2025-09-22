"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { SimpleIcons } from "./simple-icons"

interface StandardHeaderProps {
  showBackButton?: boolean
  currentUser?: {
    username: string
    role?: string
  }
}

export function StandardHeader({ showBackButton = false, currentUser }: StandardHeaderProps) {
  const router = useRouter()

  const handleBack = () => {
    router.back()
  }

  return (
    <nav className="bg-gray-900 text-white mb-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-4">
            {showBackButton && (
              <button
                onClick={handleBack}
                className="text-white hover:text-gray-300 transition-colors"
                aria-label="Voltar"
              >
                <SimpleIcons.ArrowLeft className="w-5 h-5" />
              </button>
            )}
            <Link href="/" className="text-xl font-bold text-white hover:text-gray-300">
              C.I.F.R.A
            </Link>
          </div>

          <div className="hidden md:flex">
            <ul className="flex space-x-6">
              <li>
                <Link href="/training" className="text-white hover:text-gray-300 transition-colors">
                  Treinamentos
                </Link>
              </li>
              <li>
                <Link href="/attempts" className="text-white hover:text-gray-300 transition-colors">
                  Histórico
                </Link>
              </li>
              <li>
                <Link href="/ranking" className="text-white hover:text-gray-300 transition-colors">
                  Ranking
                </Link>
              </li>
              <li>
                <Link href="/achievements" className="text-white hover:text-gray-300 transition-colors">
                  Conquistas
                </Link>
              </li>
              {currentUser?.role === "admin_ti" && (
                <>
                  <li>
                    <Link href="/reports" className="text-white hover:text-gray-300 transition-colors">
                      Relatórios
                    </Link>
                  </li>
                  <li>
                    <Link href="/settings" className="text-white hover:text-gray-300 transition-colors">
                      Configurações
                    </Link>
                  </li>
                </>
              )}
              <li>
                <Link href="/about" className="text-white hover:text-gray-300 transition-colors">
                  Sobre
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-3">
            {currentUser ? (
              <>
                <span className="text-sm">Olá, {currentUser.username}</span>
                <button className="bg-transparent border border-gray-300 text-white px-3 py-1 rounded text-sm hover:bg-gray-700 transition-colors">
                  Sair
                </button>
              </>
            ) : (
              <Link
                href="/login"
                className="bg-transparent border border-gray-300 text-white px-3 py-1 rounded text-sm hover:bg-gray-700 transition-colors"
              >
                Entrar
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
