import { useSpringCarousel } from 'react-spring-carousel'

export function Component() {
    const {
        carouselFragment,
        slideToPrevItem,
        slideToNextItem
    } = useSpringCarousel({
        items: mockedItems.map((i) => ({
            id: i.id,
            renderItem: (
                <CarouselItem color={i.color}>
                    {i.title}
                </CarouselItem>
            ),
        })),
    });

    return (
        <div>
            <button onClick={slideToPrevItem}>Prev item</button>
            {carouselFragment}
            <button onClick={slideToNextItem}>Next item</button>
        </div>
    );
}


/*<div>
    <img src="/public/projects_highLights/SvalrLuft7.jpg" alt="proyecto arquitectura 1" />
</div>
<div>
    <img src="/public/projects_highLights/Havbris16.jpg" alt="proyecto arquitectura 2" />
</div>
<div>
    <img src="/public/projects_highLights/Vinterlys13.jpg" alt="proyecto arquitectura 3" />
</div>
<div>
    <img src="/public/projects_highLights/Isbjørn7.jpg" alt="proyecto arquitectura 4" />
</div>
<div>
    <img src="/public/projects_highLights/Havbris14.jpg" alt="proyecto arquitectura 5" />
</div>
<div>
    <img src="/public/projects_highLights/Skogtroll9.jpg" alt="proyecto arquitectura 6" />
</div> */
