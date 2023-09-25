import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
import { Campo } from '../../styles'
import * as enums from '../../uteis/enums/Tarefas'
import { alteraTermo } from '../../store/reducers/filtro'
import { RootReducer } from '../../store'
const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  return (
    <S.Aside>
      <div>
        <Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
        />
      </div>
      <S.Filtros>
        <FiltroCard
          valor={enums.Status.PENDENTE}
          criterio="status"
          legenda="Pendentes"
        />
        <FiltroCard
          valor={enums.Status.CONCLUIDO}
          criterio="status"
          legenda="Concluídas"
        />
        <FiltroCard
          valor={enums.Prioridade.ALTA}
          criterio="prioridade"
          legenda="Urgentes"
        />
        <FiltroCard
          valor={enums.Prioridade.MEDIA}
          criterio="prioridade"
          legenda="Importantes"
        />
        <FiltroCard
          valor={enums.Prioridade.BAIXA}
          criterio="prioridade"
          legenda="Normal"
        />
        <FiltroCard criterio="todas" legenda="Todas" />
      </S.Filtros>
    </S.Aside>
  )
}

export default BarraLateral
