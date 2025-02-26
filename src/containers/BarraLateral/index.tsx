import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'
import { alteraTermo } from '../../store/reducers/filtro'
import { RootReducer } from '../../store'
import { Botao, Campo } from '../../styles'
import * as S from './styles'
import * as enums from '../../uteis/enums/Tarefas'
import { useNavigate } from 'react-router-dom'

type Props = {
  mostrarFiltros: boolean
}
const BarraLateral = ({ mostrarFiltros }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
            />
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
          </>
        ) : (
          <Botao type="button" onClick={() => navigate('/')}>
            Voltar a lista de tarefas
          </Botao>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
