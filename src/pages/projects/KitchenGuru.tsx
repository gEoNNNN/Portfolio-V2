import ProjectDisplay from '../../components/projectdisplay';
import kitchenGuruImg from '../../assets/cooking.png';
import '../projects/kitchenGuru.scss'

function kitchenGuru() {
  return (
    <ProjectDisplay
      name="KitchenGuru"
      description="A website that assists users in discovering recipes based on the ingredients available in their refrigerator."
      duration="Jan 2024 - Mar 2024"
      technologies={['React', 'TypeScript', 'Sass', 'Vite']}
      image={kitchenGuruImg}
    />
  );
}

export default kitchenGuru;