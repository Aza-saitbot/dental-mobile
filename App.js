import styled from 'styled-components/native'
import Group from './components/Group'

const items=[
    {
        id:1,
        active:true,
        image:'https://upload.wikimedia.org/wikipedia/commons/a/af/Dwayne_Johnson_2014%28Cropped%29.jpg',
        fullname:'Дуэйн Джонсон',
        diagnosis:'лечение зубов, легкий кариес',
        date:'11:30'
    },
    {
        id:2,
        active:false,
        image:'https://s2.vcdn.biz/static/f/2326760021/image.jpg',
        fullname:'Джеки Чан',
        diagnosis:'удаление зубов',
        date:'13:30'
    },
]

const mockData=[
    {id:1, title:'30 октября',items},
    {id:2, title:'1 ноября',items},
]

export default function App() {
    return (
        <Container>
            {mockData.map(i=>
                <Group
                    key={i.id}
                    title={i.title}
                    items={i.items}
                />
            )}
        </Container>
    )
}

const Container = styled.View`
  flex: 1;
  margin-top: 50px;
`


