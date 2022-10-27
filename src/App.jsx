import {  Card, Container, Footer, GlobalStyle, Profile, Stats } from './styles'
import  logo  from "../src/assets/logo.svg";
import  company  from "../src/assets/company.svg";
import  followers  from "../src/assets/followers.svg";
import  following  from "../src/assets/following.svg";
import  location  from "../src/assets/location.svg";
import  repository  from "../src/assets/repository.svg";
import avatar from "../src/assets/img-perfil.png";



//import imgperfil from "../src/assets/img-perfil.png";
//import { FiCircle } from 'react-icons/fi';

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Card>

            <div className='repoName'>Edu
          
              <div className='logo'>  
              <img className = 'img' src={logo}/> 
              </div> 
            
            
            </div>
          
          <Profile>
            <img src={avatar}/>
          
          </Profile>
          <Stats>

            <div className='description'>
              <img className="space-icons" src={followers}/> 716 Seguidores
            </div>
                
            <div className='description'>
              <img className="space-icons" src={following}/> 139 Seguindo
             
            </div>
                
            <div className='description'>
              <img className="space-icons" src={repository}/> 38 Repositórios
            </div>

            <div className='description'>
              <img className="space-icons" src={company}/> @Rocketseat
            </div>

            <div className='description'>
              <img className="space-icons" src={location}/> Bebedouro
            </div>
            

          </Stats>

          <Footer>
            <img className="logo-rocket" src={logo}/>

            ROCKETCARD
            
            
          </Footer>
         
        </Card>
        </Container>  
    </>
  )
}

export default App
