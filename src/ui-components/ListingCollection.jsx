/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Businesses } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import Listing from "./Listing";
import { Collection } from "@aws-amplify/ui-react";
export default function ListingCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Businesses,
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    async function setItemsFromDataStore() {
      var loaded = await Promise.all(
        itemsDataStore.map(async (item) => ({
          ...item,
          Owner: await item.Owner,
          Reviews: await item.Reviews.toArray(),
        }))
      );
      setItems(loaded);
    }
    setItemsFromDataStore();
  }, [itemsProp, itemsDataStore]);
  return (
    <Collection
      type="list"
      direction="column"
      justifyContent="left"
      items={items || []}
      {...getOverrideProps(overrides, "ListingCollection")}
      {...rest}
    >
      {(item, index) => (
        <Listing
          businesses={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></Listing>
      )}
    </Collection>
  );
}