import { CORE_CONCEPTS } from "../Data";
import CoreConcept from "./CoreConcept";

export default function CoreConcepts(){
    return(
    <section id='core-concepts'>
            <h2>Core do React</h2>
                <ul>
                      {CORE_CONCEPTS.map(concept =>{
                        return(
                        <CoreConcept key={concept.id} {...concept}
                        />)
              })}
                    </ul>
        </section>)
}