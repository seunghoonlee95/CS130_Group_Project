import React from 'react';  //Can't believe it took me 4 freaking hours to figure out this line is needed
                            //big thumb-down to whoever writes jest react tutorial!
                            //ref: https://stackoverflow.com/a/58980971/18070219
import renderer from 'react-test-renderer';
import Link from '../sampleTest2-Link';

it('changes the class when hovered', () => {
  const component = renderer.create(
    <Link page="http://www.facebook.com">Facebook</Link>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  renderer.act(() => {
    tree.props.onMouseEnter();
  });
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  renderer.act(() => {
    tree.props.onMouseLeave();
  });
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});