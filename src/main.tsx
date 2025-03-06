import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { AppRouter } from './routers/AppRouter'
import { Theme } from './ui/Theme/Theme'
import { FinancesContext } from './state/InventoryContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
            <FinancesContext>
                <Theme>
                    <RouterProvider router={AppRouter}/>
                </Theme>
            </FinancesContext>
  </StrictMode>,
)
