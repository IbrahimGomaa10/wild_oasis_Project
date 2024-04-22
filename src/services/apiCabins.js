import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    throw new Error("Cabin hasn't loaded yet");
  }
  return data;
}

export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin?.image?.startsWith?.(supabaseUrl);
  //making random image name
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabins_images/${imageName}`;

  let query = supabase.from("cabins");
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  if (id)
    query = query.update([{ ...newCabin, image: imagePath }]).eq("id", id);

  const { data, error } = await query.select().single();
  if (error) {
    throw new Error("Cabin hasn't Created yet");
  }

  //Upload file from my computer
  if (hasImagePath) return data;
  const { error: storageError } = await supabase.storage
    .from("cabins_images")
    .upload(imageName, newCabin.image);

  // Deleting cabin which couldn't upload image to it

  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data?.id);
    throw new Error("Cabin could not upload image");
  }
  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    throw new Error("Cabin hasn't Deleted yet");
  }
  return data;
}
