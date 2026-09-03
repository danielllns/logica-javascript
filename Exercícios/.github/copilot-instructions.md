# Instruções para Agentes AI - Exercícios JavaScript

## Contexto do Projeto
Este é um repositório de **exercícios práticos de um curso JavaScript**. Cada arquivo representa um exercício independente focado em conceitos específicos da linguagem.

## Estrutura e Convenções

### Padrão de Nomenclatura
- **Arquivos**: `exercicio[numero].js` (ex: `exercicio1.js`, `exercicio2.js`)
- **Objetivo**: Um conceito ou funcionalidade JavaScript por arquivo

### Convenções de Código
- Usar `const` para declarações que não serão reatribuídas
- Usar `let` apenas quando necessário reatribuir valores
- Evitar `var` (padrão moderno ES6+)
- Comentários em português explicando a lógica
- Nomes de funções em camelCase: `somarNumeros()`, `validarEmail()`

## Workflow Típico para Exercícios

1. **Implementação**: Completar a lógica da função/exercício
2. **Testes Manuais**: Executar com `node exercicio[numero].js` para validar
3. **Exemplos**: Incluir `console.log()` com casos de teste básicos

## Exemplo de Estrutura Esperada
```javascript
// Descrição breve do que o exercício faz
// Ex: Operações matemáticas básicas

function somarNumeros(a, b) {
  return a + b;
}

// Testes/Exemplos de uso
console.log(somarNumeros(5, 3)); // Resultado esperado: 8
```

## Executar Exercícios
```bash
node exercicio1.js
node exercicio2.js
# etc...
```

## Dicas para AI Agents
- **Contexto Educacional**: Priorize clareza e didática sobre otimizações avançadas
- **Validação**: Sempre incluir exemplos de teste com `console.log()`
- **ES6+**: Usar sintaxe moderna (arrow functions, template literals, destructuring quando apropriado)
- **Independência**: Cada exercício deve funcionar isoladamente sem dependências de outros
