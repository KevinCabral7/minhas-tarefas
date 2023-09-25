import { Campo, MainContainer, Titulo } from '../../styles'
import { Form } from './styles'
const Formulario = () => (
  <MainContainer>
    <Titulo>Nova tarefa</Titulo>
    <Form>
      <Campo type="text" placeholder="Titulo" />
      <Campo as="textarea" placeholder="Descrição da Tarefa" />
      <div>
        <p>Prioridade</p>
        <input name="prioridade" type="radio" id="Urgente" />{' '}
        <label htmlFor="Urgente">Urgente</label>
        <input name="prioridade" type="radio" id="Importante" />
        <label htmlFor="Importante">Importante</label>
        <input name="prioridade" type="radio" id="Normal" />{' '}
        <label htmlFor="Normal">Normal</label>
      </div>
      <button type="submit">Cadastrar</button>
    </Form>
  </MainContainer>
)
export default Formulario
