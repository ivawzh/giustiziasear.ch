import { connectSearchBox } from 'react-instantsearch/connectors';

const GiustiziaSearchBox = ({ currentRefinement, refine }) =>
    <input
        type="text"
        value={currentRefinement}
        onChange={e => refine(e.target.value)}
    />;

// `ConnectedSearchBox` renders a `<MySearchBox>` widget that is connected to
// the <InstantSearch> state, providing it with `currentRefinement` and `refine` props for
// reading and manipulating the current query of the search.
// Note that this `ConnectedSearchBox` widget will only work when rendered
// as a child or a descendant of the `<InstantSearch>` component.
const ConnectedSearchBox = connectSearchBox(GiustiziaSearchBox);

