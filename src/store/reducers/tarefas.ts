import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../uteis/enums/Tarefas'

const TarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      'Estudar JavaScript',
      enums.Prioridade.ALTA,
      enums.Status.PENDENTE,
      'Fortalecer conceitos gerais',
      1
    ),
    new Tarefa(
      'Estudar Django',
      enums.Prioridade.ALTA,
      enums.Status.PENDENTE,
      '',
      2
    ),
    new Tarefa(
      'Estudar HTML e CSS',
      enums.Prioridade.ALTA,
      enums.Status.CONCLUIDO,
      '',
      3
    ),
    new Tarefa(
      'Revisar CV',
      enums.Prioridade.BAIXA,
      enums.Status.PENDENTE,
      'Talvez seria melhor dar uma olhada nas informações gerais',
      4
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id != action.payload)
    }
  }
})

export const { remover } = TarefasSlice.actions
export default TarefasSlice.reducer
