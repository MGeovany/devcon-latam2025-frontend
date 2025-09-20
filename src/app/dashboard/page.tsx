"use client";

import { useState } from "react";
import { type ReactNode } from "react";

interface SidebarItem {
  id: string;
  label: string;
  icon: ReactNode;
}

const sidebarItems: SidebarItem[] = [
  {
    id: "home",
    label: "Home",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
  {
    id: "clases",
    label: "Clases",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  },
  {
    id: "alumnos",
    label: "Alumnos",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
        />
      </svg>
    ),
  },
  {
    id: "progreso",
    label: "Progreso",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
  {
    id: "reportes",
    label: "Reportes",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    id: "configuraciones",
    label: "Configuraciones",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
];

interface MainContentProps {
  activeSection: string;
}

function MainContent({ activeSection }: MainContentProps) {
  const renderContent = () => {
    switch (activeSection) {
      case "home":
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-black">Dashboard</h1>
              <p className="text-gray-600">Bienvenido al panel de control</p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-black">
                  Total de Clases
                </h3>
                <p className="text-3xl font-bold text-black">24</p>
                <p className="text-sm text-gray-600">Este mes</p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-black">
                  Alumnos Activos
                </h3>
                <p className="text-3xl font-bold text-black">156</p>
                <p className="text-sm text-gray-600">Registrados</p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-black">
                  Progreso Promedio
                </h3>
                <p className="text-3xl font-bold text-black">87%</p>
                <p className="text-sm text-gray-600">Completado</p>
              </div>
            </div>
          </div>
        );

      case "clases":
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-black">Clases</h1>
              <p className="text-gray-600">Gestiona tus clases y horarios</p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h2 className="mb-4 text-xl font-semibold text-black">
                Próximas Clases
              </h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <div>
                    <p className="font-medium text-black">
                      Matemáticas Básicas
                    </p>
                    <p className="text-sm text-gray-600">Grado 1 - Aula 201</p>
                  </div>
                  <span className="text-sm text-gray-600">10:00 AM</span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <div>
                    <p className="font-medium text-black">
                      Inglés Conversacional
                    </p>
                    <p className="text-sm text-gray-600">Grado 3 - Aula 105</p>
                  </div>
                  <span className="text-sm text-gray-600">11:30 AM</span>
                </div>
              </div>
            </div>
          </div>
        );

      case "alumnos":
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-black">Alumnos</h1>
              <p className="text-gray-600">Información de estudiantes</p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h2 className="mb-4 text-xl font-semibold text-black">
                Lista de Alumnos
              </h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <div>
                    <p className="font-medium text-black">María García</p>
                    <p className="text-sm text-gray-600">Grado 2 - Sección A</p>
                  </div>
                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-800">
                    Activo
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <div>
                    <p className="font-medium text-black">Carlos López</p>
                    <p className="text-sm text-gray-600">Grado 1 - Sección B</p>
                  </div>
                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-800">
                    Activo
                  </span>
                </div>
              </div>
            </div>
          </div>
        );

      case "progreso":
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-black">Progreso</h1>
              <p className="text-gray-600">Seguimiento del avance académico</p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h2 className="mb-4 text-xl font-semibold text-black">
                Progreso General
              </h2>
              <div className="space-y-4">
                <div>
                  <div className="mb-1 flex justify-between text-sm text-gray-600">
                    <span>Matemáticas</span>
                    <span>92%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-gray-200">
                    <div
                      className="h-2 rounded-full bg-black"
                      style={{ width: "92%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="mb-1 flex justify-between text-sm text-gray-600">
                    <span>Inglés</span>
                    <span>78%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-gray-200">
                    <div
                      className="h-2 rounded-full bg-black"
                      style={{ width: "78%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="mb-1 flex justify-between text-sm text-gray-600">
                    <span>Ciencias</span>
                    <span>85%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-gray-200">
                    <div
                      className="h-2 rounded-full bg-black"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "reportes":
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-black">Reportes</h1>
              <p className="text-gray-600">Análisis y estadísticas</p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-lg border border-gray-200 bg-white p-6">
                <h3 className="mb-4 text-lg font-semibold text-black">
                  Reporte Mensual
                </h3>
                <p className="mb-4 text-gray-600">
                  Resumen de actividades del mes actual
                </p>
                <button className="rounded-lg bg-black px-4 py-2 text-white transition-colors hover:bg-gray-800">
                  Descargar PDF
                </button>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6">
                <h3 className="mb-4 text-lg font-semibold text-black">
                  Estadísticas
                </h3>
                <p className="mb-4 text-gray-600">
                  Análisis de rendimiento académico
                </p>
                <button className="rounded-lg bg-black px-4 py-2 text-white transition-colors hover:bg-gray-800">
                  Ver Gráficos
                </button>
              </div>
            </div>
          </div>
        );

      case "configuraciones":
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-black">Configuraciones</h1>
              <p className="text-gray-600">Ajustes del sistema</p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <h2 className="mb-4 text-xl font-semibold text-black">
                Configuración General
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-black">
                      Notificaciones por Email
                    </p>
                    <p className="text-sm text-gray-600">
                      Recibir notificaciones importantes
                    </p>
                  </div>
                  <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-black">
                    <span className="inline-block h-4 w-4 translate-x-6 transform rounded-full bg-white transition" />
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-black">Modo Oscuro</p>
                    <p className="text-sm text-gray-600">
                      Cambiar tema de la aplicación
                    </p>
                  </div>
                  <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200">
                    <span className="inline-block h-4 w-4 translate-x-1 transform rounded-full bg-white transition" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div>
            <h1 className="text-3xl font-bold text-black">
              Sección no encontrada
            </h1>
            <p className="text-gray-600">La sección seleccionada no existe.</p>
          </div>
        );
    }
  };

  return (
    <div className="flex-1 overflow-auto">
      <div className="p-8">{renderContent()}</div>
    </div>
  );
}

export default function DashboardPage() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div className="w-64 bg-black text-white">
        <div className="p-6">
          <h2 className="text-xl font-bold">ABC Kids</h2>
          <p className="text-sm text-gray-400">Panel de Control</p>
        </div>

        <nav className="mt-8">
          <ul className="space-y-2 px-4">
            {sidebarItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveSection(item.id)}
                  className={`flex w-full items-center space-x-3 rounded-lg px-4 py-3 text-left transition-colors ${
                    activeSection === item.id
                      ? "bg-white text-black"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white"
                  }`}
                >
                  <span>{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <MainContent activeSection={activeSection} />
    </div>
  );
}
