# "Next.js Server Actions"

- Projeto criado como prova de conceito para renderização server-side vs client-side

| Mudança                                                     | Vantagens                                                                                                                                                                                                                                                                                                                                                                                                                       | Desvantagens                                                                                                                                                                                                                                                                                                                                                                                                   |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Migração de Auth-Server de Client-side para Server-side** | - **Melhor segurança**: Credenciais não ficam expostas ao cliente, reduzindo riscos de ataques.<br> - **Menos dependência do estado do cliente**: Elimina problemas causados por bibliotecas de estado no cliente.<br> - **Experiência do usuário melhorada**: Carregamento do conteúdo autenticado mais rápido.<br> - **SEO melhorado**: Server-side rendering garante que motores de busca vejam o conteúdo com autenticação. | - **Carga maior no servidor**: Cada carregamento exige verificação de autenticação, o que aumenta o custo.<br> - **Maior complexidade de infraestrutura**: Necessidade de manter sessões ou cookies seguros.<br> - **Latência de rede**: A verificação no servidor pode causar atrasos para usuários distantes.<br> - **Cache limitado**: Cache de respostas pode ser mais complexo, impactando a performance. |
| **Migração do Next.js 14.1.4 para 15**                      | - **Novas APIs e melhor suporte a TypeScript**: Código mais robusto e melhor controle de tipos.<br> - **Melhorias de performance**: Maior eficiência para SSR.<br> - **Autenticação integrada com App Router**: Experiência aprimorada para autenticação e controle de sessão.<br> - **Incremental Static Regeneration (ISR) aprimorado**: Útil para conteúdo dinâmico ou autorizado.                                           | - **Possível quebra de compatibilidade**: Alguns pacotes ou configurações podem precisar de ajustes.<br> - **Aprendizado e adaptação**: Equipe precisa se adaptar às mudanças.<br> - **Risco de instabilidade inicial**: Grandes atualizações podem introduzir novos bugs e comportamentos inesperados.                                                                                                        |
