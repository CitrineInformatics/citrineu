# 1. The LinkMaster Framework

## 1.1. Table of Contents
<!-- TOC -->

- [The LinkMaster Framework](#the-linkmaster-framework)
    - [Table of Contents](#table-of-contents)
    - [Framework Description](#framework-description)
        - [Basic File Structure](#basic-file-structure)
        - [Example File](#example-file)
    - [Recognized Keywords](#recognized-keywords)
        - [General Format](#general-format)
        - [Allowed *only* in Processes](#allowed-only-in-processes)
        - [Allowed *only* in Measurements](#allowed-only-in-measurements)
        - [Allowed in *both* Processes and Measurements](#allowed-in-both-processes-and-measurements)
    - [Reserved or Special UID Scopes](#reserved-or-special-uid-scopes)
    - [Known Limitations](#known-limitations)
    - [Important Information](#important-information)
        - [Process Tabs](#process-tabs)
        - [Measurement Tabs](#measurement-tabs)
        - [Attributes (Properties, Conditions, or Parameters)](#attributes-properties-conditions-or-parameters)
        - [Value Types](#value-types)
    - [Keyword Details](#keyword-details)
        - [PARAMETER NAME](#parameter-name)
        - [PARAMETER TEMPLATE: custom uid name or "id"](#parameter-template-custom-uid-name-or-id)
        - [PARAMETER NOTES](#parameter-notes)
        - [PARAMETER FILE LINKS](#parameter-file-links)
        - [PARAMETER ORIGIN](#parameter-origin)
        - [PARAMETER VALUE SPEC: unit or type](#parameter-value-spec-unit-or-type)
        - [PARAMETER VALUE RUN: unit or type](#parameter-value-run-unit-or-type)
        - [CONDITION NAME](#condition-name)
        - [CONDITION TEMPLATE: custom uid name or "id"](#condition-template-custom-uid-name-or-id)
        - [CONDITION NOTES](#condition-notes)
        - [CONDITION FILE LINKS](#condition-file-links)
        - [CONDITION ORIGIN](#condition-origin)
        - [CONDITION VALUE SPEC: unit or type](#condition-value-spec-unit-or-type)
        - [CONDITION VALUE RUN: unit or type](#condition-value-run-unit-or-type)
        - [INPUT MATERIALS UIDS: LinkMaster ID](#input-materials-uids-linkmaster-id)
        - [INGREDIENT AMOUNTS SPEC: unit or type](#ingredient-amounts-spec-unit-or-type)
        - [INGREDIENT AMOUNTS RUN: unit or type](#ingredient-amounts-run-unit-or-type)
        - [INGREDIENT LABELS](#ingredient-labels)
        - [INGREDIENT NAMES](#ingredient-names)
        - [PROCESS NAME](#process-name)
        - [PROCESS TEMPLATE: custom uid name or "id"](#process-template-custom-uid-name-or-id)
        - [PROCESS UID: custom uid name](#process-uid-custom-uid-name)
        - [PROCESS FILE LINKS](#process-file-links)
        - [PROCESS NOTES](#process-notes)
        - [PROCESS TAGS](#process-tags)
        - [PROCESS DATE](#process-date)
        - [PROCESS OPERATOR](#process-operator)
        - [OUTPUT MATERIAL UID: custom uid name](#output-material-uid-custom-uid-name)
        - [OUTPUT MATERIAL TEMPLATE: custom uid name or "id"](#output-material-template-custom-uid-name-or-id)
        - [OUTPUT MATERIAL NAME](#output-material-name)
        - [OUTPUT MATERIAL TAGS](#output-material-tags)
        - [OUTPUT MATERIAL NOTES](#output-material-notes)
        - [OUTPUT MATERIAL TYPE](#output-material-type)
        - [OUTPUT MATERIAL FILE LINKS](#output-material-file-links)
        - [INPUT MATERIAL UID: LinkMaster ID](#input-material-uid-linkmaster-id)
        - [MEASUREMENT NAME](#measurement-name)
        - [MEASUREMENT TEMPLATE: custom uid name or "id"](#measurement-template-custom-uid-name-or-id)
        - [MEASUREMENT DATE](#measurement-date)
        - [MEASUREMENT OPERATOR](#measurement-operator)
        - [MEASUREMENT UID](#measurement-uid)
        - [MEASUREMENT FILE LINKS](#measurement-file-links)
        - [MEASUREMENT NOTES](#measurement-notes)
        - [MEASUREMENT TAGS](#measurement-tags)
        - [PROPERTY NAME](#property-name)
        - [PROPERTY TEMPLATE: custom uid name or "id"](#property-template-custom-uid-name-or-id)
        - [PROPERTY NOTES](#property-notes)
        - [PROPERTY FILE LINKS](#property-file-links)
        - [PROPERTY ORIGIN](#property-origin)
        - [PROPERTY VALUE RUN: unit or type](#property-value-run-unit-or-type)
- [Using the Ingester](#using-the-ingester)
    - [Installation](#installation)
    - [Running from the CLI](#running-from-the-cli)
        - [ingest.py -- Ingesting a LinkMaster File](#ingestpy----ingesting-a-linkmaster-file)
        - [precheck.py -- Checking a LinkMaster File for correctness](#precheckpy----checking-a-linkmaster-file-for-correctness)
    - [Config Files.](#config-files)


## 1.2. Framework Description
The LinkMaster Framework can be used to upload your Materials Data to the Citrine Platform. This Framework makes use of recognized keywords in the headers of Excel Sheets to direct the ingestion (upload) of data.

### 1.2.1. Basic File Structure
The LinkMaster Framework has been designed to store information about materials, how they were made, and their properties. 
This can be done by using recognized keywords in the column headers, and entering data into those columns.
This Framework heavily parallels [GEMD](https://citrineinformatics.github.io/citrine-python/getting_started/data_model.html), Citrine's data model.
A LinkMaster File is an Excel workbook where each Process or Measurement is represented in different sheet (tab) within the workbook.
The cells in the first row of each sheet contain header names, and the cells in the subsequent rows contain information regarding that Process or Measurement that corresponds with the column headers. 

### 1.2.2. Example File
To see an example file, please click [here](https://github.com/CitrineInformatics/linkmaster/blob/master/examples/Book1.xlsx)

## 1.3. Recognized Keywords
Every column in your LinkMaster file must have a header containing a recognized `keyword`. Recognized `keywords` are previously determined labels that describe your data.

The `keywords` (column headers) used in your LinkMaster File must *exactly* match a `keyword` listed in this document; however, the detail after the colon can be modified to fit your needs. 

See [Keyword Details](#kd) for a complete list of recognized `keywords` and, where applicable, details that can provided (e.g where to specify units). Some details are optional, and have default values. 

### 1.3.1. General Format
General header format:
KEYWORD: detail

### 1.3.2. Allowed *only* in Processes
    - INPUT MATERIALS UIDS: LinkMaster ID (special)
    - INGREDIENT AMOUNTS SPEC: unit or type
    - INGREDIENT AMOUNTS RUN: unit or type
    - INGREDIENT LABELS
    - INGREDIENT NAMES
    - PROCESS NAME
    - PROCESS TEMPLATE: custom uid name or "id" (default)
    - PROCESS FILE LINKS
    - PROCESS NOTES
    - PROCESS TAGS
    - PROCESS DATE
    - PROCESS OPERATOR
    - PROCESS UID: custom uid name
    - OUTPUT MATERIAL UID: custom uid name
    - OUTPUT MATERIAL NAME
    - OUTPUT MATERIAL TEMPLATE: custom uid name or "id" (default)
    - OUTPUT MATERIAL TAGS
    - OUTPUT MATERIAL NOTES
    - OUTPUT MATERIAL TYPE
    - OUTPUT MATERIAL FILE LINKS

### 1.3.3. Allowed *only* in Measurements
    - INPUT MATERIAL UID: LinkMaster ID (special)
    - MEASUREMENT NAME
    - MEASUREMENT TEMPLATE: custom uid name or "id" (default)
    - MEASUREMENT FILE LINKS
    - MEASUREMENT NOTES
    - MEASUREMENT TAGS
    - MEASUREMENT DATE
    - MEASUREMENT OPERATOR
    - MEASUREMENT UID: custom uid name
    - PROPERTY TEMPLATE: custom uid name or "id" (default)
    - PROPERTY NAME
    - PROPERTY NOTES
    - PROPERTY FILE LINKS
    - PROPERTY ORIGIN
    - PROPERTY VALUE RUN: unit or type

### 1.3.4. Allowed in *both* Processes and Measurements
    - PARAMETER NAME
    - PARAMETER TEMPLATE: custom uid name or "id" (default)
    - PARAMETER NOTES
    - PARAMETER FILE LINKS 
    - PARAMETER ORIGIN 
    - PARAMETER VALUE SPEC: unit or type
    - PARAMETER VALUE RUN: unit or type
    - CONDITION NAME
    - CONDITION TEMPLATE: custom uid name or "id" (default)
    - CONDITION NOTES
    - CONDITION FILE LINKS
    - CONDITION ORIGIN
    - CONDITION VALUE SPEC: unit or type
    - CONDITION VALUE RUN: unit or type

## 1.4. Reserved or Special UID Scopes
Scopes allow you to say _which_ unique identifier (UID) you are referring to. [You can read more about scopes here](https://citrineinformatics.github.io/taurus-documentation/specification/unique-identifiers/). There are two special UID scopes: `id` and `LinkMaster ID`.

`id` is the UID scope that Citrine reserves as our platform's object identifier. Because of this, `id` can only be used when referring to a Template. You cannot *assign* a UID with the `id` scope using LinkMaster, you can only _reference_ an _existing_ object using the `id` scope. Thus, this scope can only be used to reference an existing Template in the LinkMaster Framework.

`LinkMaster ID` is the identifier scope used for ingesting your LinkMaster file, and is thus special. These UIDs are the source of the links between the different tabs of your file. As such, the column headers `INPUT MATERIALS UIDS: LinkMaster ID` and `OUTPUT MATERIAL UID: LinkMaster ID` in Process tabs, and the column header `INPUT MATERIAL UID: LinkMaster ID` in Measurement tabs are very important columns. They are described in more detail below.

## 1.5. Known Limitations
Currently there is no way to associate multiple Process Run or Measurement Runs to the same Process Spec or Measurement Spec, respectively. *The LinkMaster framework always assumes a 1:1 relationship between Run and Spec.*

Only Run Objects can hold Notes, File Links, UIDs, and Attribute Origin.

Names and Tags are shared between Runs and Specs for all Objects and Names are shared for Attributes between Specs and Runs.

[MaterialSpec](https://citrineinformatics.github.io/citrine-python/reference/citrine.resources.material_spec.html#citrine.resources.material_spec.MaterialSpec) objects cannot store any attribute information. 

You cannot link files to Ingredients.

## 1.6. Important Information

### 1.6.1. Process Tabs
Process tabs *require* the following column headers:

    - INPUT MATERIALS UIDS: LinkMaster ID (unless it is a Process that instantiates a Material such as a purchasing Process)
    - INGREDIENT NAMES (unless it is a Process that instantiates a Material such as a Purchasing Process)
    - PROCESS NAME
    - OUTPUT MATERIAL UID: LinkMaster ID
    - OUTPUT MATERIAL NAME

### 1.6.2. Measurement Tabs
Measurement tabs *require* the following column headers:

    - INPUT MATERIAL UID: LinkMaster ID
    - MEASUREMENT NAME

### 1.6.3. Attributes (Properties, Conditions, or Parameters)
Processes can have many Parameters and Conditions while Measurements can have many Parameters, Conditions, and Properties. Note that the left-to-right order of attribute columns matters; this is described in more detail below. Any time you want to define a Property, Condition, or Property (known collectively as Attributes) within a Process or Measurement you *must* have the following column headers:

    - ATTRIBUTE NAME
        - PARAMETER NAME
        - CONDITION NAME
        - PROPERTY NAME
    - ATTRIBUTE VALUE SPEC and/or ATTRIBUTE VALUE RUN
        - PARAMETER VALUE SPEC and/or PARAMETER VALUE RUN
        - CONDITION VALUE SPEC and/or CONDITION VALUE NAME
        - PROPERTY VALUE SPEC and/or PROPERTY VALUE RUN

The all other columns are optional when defining an Attribute.

### 1.6.4. Value Types

Value types are sometimes inferred and sometimes specified. [You can learn more about all of the different Value types we support on the Citrine Platform here](https://citrineinformatics.github.io/taurus-documentation/specification/value-types/). Ingredients have special allowed units. [See the details on Ingredient Amounts columns for more information.](#ingredient-amounts-spec-unit-or-type)

**Real Values:**
There are three types of Real Values supported: Normal, Nominal and Uniform. All of these three types accept units. If you do not specify a unit, the value is assumed to be unitless.

Name| Normal Real
-----|--------|
Syntax| mean ± one standard deviation
Example header| PARAMETER VALUE SPEC: degC
Example Value| 100.5 ± 0.3

Name| Nominal Real
-----|--------|
Syntax| value
Example header| PARAMETER VALUE SPEC: degC
Example Value| 100.5

Name| Uniform Real
-----|--------|
Syntax| [lower, upper]
Example header| PARAMETER VALUE SPEC: degC
Example Value| [99.8, 100.3]

**Integer Values:**
There are two types of [Integer Values](https://citrineinformatics.github.io/taurus-documentation/specification/value-types/#integer-values) supported: Nominal and Uniform. Integer values are always unitless, and the type `integer` should be provided. Note that `integer` values cannot be used when defining ingredient amounts because ingredient amounts must be continuous values on the Citrine Platform.

Name| Nominal Integer
-----|--------|
Syntax| value
Example header| PARAMETER VALUE SPEC: integer
Example Value| 7

Name| Uniform Integer
-----|--------|
Syntax| [lower, upper]
Example header| PARAMETER VALUE SPEC: integer
Example Value| [3,8]

**Categorical Values:**
There are two types of allowed catagorical values: Nominal and Discrete. Both of these should have the type `categorical` in the column header. 

Nominal categoricals can simply have a string as the value:

Name| Nominal Categorical
-----|--------|
Syntax| category
Example header| PARAMETER VALUE SPEC: categorical
Example Value| broil

Discrete Categoricals describe a distribution over categories. For each category with a nonzero probability,
the name is provided in quotation marks followed by a colon and its probability. *Note: Probabilities must add up to 1.0.* Different categories are separated by commas, 
within curly brackets:

Name| Discrete Categorical
-----|--------|
Syntax| category
Example header| PARAMETER VALUE SPEC: categorical
Example Value| {'category2': 0.7, 'category3': 0.2, 'category5': 0.1}


**Formula Values:**
LinkMaster Framework can accept an Empirical Formula. These values should have the type `formula`

Name| Empirical Formula
-----|--------|
Syntax| formula
Example header| PROPERTY VALUE SPEC: formula
Example Value| SiO2



## 1.7. Keyword Details

### 1.7.1. PARAMETER NAME
The Parameter Name should contain the name of the Parameter. The name of the Parameter will be the same for the corresponding Object's Spec and Run. **NOTE** A Parameter Name column is necessary to add a Parameter to a Measurement or Process. The Parameter information (e.g Parameter Notes, Parameter File Links, etc.) supplied to the *right* of the `Parameter Name` column(s) are associated with this Parameter. A **new** Parameter can be started by supplying another Parameter Name column.

**Examples:**

PARAMETER NAME|
--------------|
Maximum Temperature|


### 1.7.2. PARAMETER TEMPLATE: custom uid name or "id"
The Parameter Template should contain a unique ID of the Parameter's Template. If this column is not present or if the field is empty, the Parameter is assumed to not have a Parameter Template. The detail provided after the colon allows you to specify [*which* unique ID to reference (the scope)](https://citrineinformatics.github.io/taurus-documentation/specification/unique-identifiers/); if nothing is provided here it defaults to the Citrine Platform UUID.

**Examples:**

PARAMETER TEMPLATE: my cool id|
------------------------------|
business_unit_389h_bd2b_93|

PARAMETER TEMPLATE|
------------------|
725892-v44f3-34t34f-45t45g4


### 1.7.3. PARAMETER NOTES
The Parameter Notes should contain free-style text about the Parameter. This will only be recorded in the corresponding Run.

**Examples:**

PARAMETER NOTES|
---------------|
The instrument knob was super wobbly, so it may not have been set correctly.|


### 1.7.4. PARAMETER FILE LINKS
The Parameter File Links should contain the filename(s) of file(s) you would like to associate with this Parameter. Note these must be in the same directory as the LinkMaster File (relative paths are not supported). Multiple files can be added by using a comma to separate file names. This will only be recorded in the corresponding Object Run.

**Examples:**

PARAMETER FILE LINKS|
---------------|
20191027_info.txt, 2018_inst_calib.csv|

PARAMETER FILE LINKS|
---------------|
20190916_output.csv|


### 1.7.5. PARAMETER ORIGIN
The Parameter Origin should contain the origin of said Parameter. The Value must be one of “measured”, “predicted”, “summary”, “specified”, “computed”, or “unknown.” Default is “unknown.” This will only be recorded in the corresponding Object Run.

**Examples:**

PARAMETER ORIGIN|
---------------|
measured|


### 1.7.6. PARAMETER VALUE SPEC: unit or type
The Parameter Value Spec should contain the value of the *spec* of that parameter. Units or value type can be provided after a colon, but default to unitless. [Please see value types for more information](#Value-Types).

**Examples:**

PARAMETER VALUE SPEC: g|
---------------|
4.5|

PARAMETER VALUE SPEC|
---------------|
5.8 ± 0.4|

PARAMETER VALUE SPEC: categorical|
---------------|
convention|


### 1.7.7. PARAMETER VALUE RUN: unit or type
The Parameter Value Spec should contain the value of the *run* of that parameter. Units or value type can be provided after a colon, but default to unitless. [Please see value types for more information](#Value-Types).

**Examples:**

PARAMETER VALUE RUN: g|
---------------|
4.6|

PARAMETER VALUE RUN|
---------------|
5.7 ± 0.3|

PARAMETER VALUE RUN: categorical|
---------------|
convention|

### 1.7.8. CONDITION NAME
The Condition Name should contain the name of the Condition. The name of the Condition will be the same for the corresponding Object's Spec and Run. **NOTE** A Condition Name column is necessary to add a Parameter to a Measurement or Process. The Condition information (e.g Condition Notes, Condition File Links, etc.) supplied to the *right* of the Condition Name column(s) are associated with this Condition. A **new** Condition can be started by supplying another Condition Name column.

**Examples:**

CONDITION NAME|
--------------|
Maximum Temperature|


### 1.7.9. CONDITION TEMPLATE: custom uid name or "id"
The Condition Template should contain a unique ID of the Condition's Template. If this column is not present or if the field is empty, the Condition is assumed to not have a Condition Template. The detail provided after the colon allows you to specify [*which* unique ID to reference (the scope)](https://citrineinformatics.github.io/taurus-documentation/specification/unique-identifiers/); if nothing is provided here it defaults to the Citrine Platform UUID.

**Examples:**

CONDITION TEMPLATE: my cool id|
------------------------------|
business_unit_389h_bd2b_93|

CONDITION TEMPLATE|
------------------|
725892-v44f3-34t34f-45t45g4


### 1.7.10. CONDITION NOTES
The Condition Notes should contain free-style text about the Condition. This will only be recorded in the corresponding Run.

**Examples:**

CONDITION NOTES|
---------------|
The thermocouple reading the Max Temp was being finicky. Not sure how much I trust this value.|


### 1.7.11. CONDITION FILE LINKS
The Condition File Links should contain the filename(s) of file(s) you would like to associate with this Condition. Note these must be in the same directory as the LinkMaster File (relative paths are not supported). Multiple files can be added by using a comma to separate file names. This will only be recorded in the corresponding Run.

**Examples:**

CONDITION FILE LINKS|
---------------|
20191027_info.txt, 2018_inst_calib.csv|

CONDITION FILE LINKS|
---------------|
20190916_output.csv|


### 1.7.12. CONDITION ORIGIN
The Condition Origin should contain the origin of said Condition. The Value must be one of “measured”, “predicted”, “summary”, “specified”, “computed”, or “unknown.” Default is “unknown.” This will only be recorded in the corresponding Run.

**Examples:**

CONDITION ORIGIN|
---------------|
measured|


### 1.7.13. CONDITION VALUE SPEC: unit or type
The Condition Value Spec should contain the value of the *spec* of that Condition. Units or value type can be provided after a colon, but default to unitless. [Please see value types for more information](#Value-Types).

**Examples:**

CONDITION VALUE SPEC: g|
---------------|
4.5|

CONDITION VALUE SPEC|
---------------|
5.8 ± 0.4|

CONDITION VALUE SPEC: categorical|
---------------|
convention|


### 1.7.14. CONDITION VALUE RUN: unit or type
The Condition Value Run should contain the value of the *run* of that Condition. Units or value type can be provided after a colon, but default to unitless. [Please see value types for more information](###Value-Types).

**Examples:**

CONDITION VALUE RUN: g|
---------------|
4.5|

CONDITION VALUE RUN|
---------------|
5.8 ± 0.4|

CONDITION VALUE RUN: categorical|
---------------|
convention|


### 1.7.15. INPUT MATERIALS UIDS: LinkMaster ID
The `Input Materials UID` Column should contain the unique LinkMaster IDs of the Materials entering a Process. [For denoting a Material in a Measurement, please see below](#input-material-uid-linkmaster-id). This is one of the *required* columns for a Process (unless the process is an originating process such as a purchasing Process). **The information in this column also dictates the order of ingredients, which is relevant to ingredient columns**. For example, if a list of three `INPUT MATERIAL UIDS` is provided herein, three `INGREDIENT AMOUNTS` and `INGREDIENT LABELS` would be expected if provided. Note that the `scope` for this column must be `LinkMaster ID`. Also note that it is allowed to have one Material in with no comma delimiter.

**Examples**

INPUT MATERIALS UIDS: LinkMaster ID|
------------------|
725892-v44f3-34t34f-45t45g4-rff43gf5f2, 423904790-grgf34r3-r432f42f42-3r23rf43f423

INPUT MATERIALS UIDS: LinkMaster ID|
------------------|
725892-v44f3-34t34f-45t45g4-rff43gf5f2


### 1.7.16. INGREDIENT AMOUNTS SPEC: unit or type
The Ingredient Amounts Spec Column should contain the spec'ed *amount* of each input material. The length of the list provided *must* match the length of the row's `INPUT MATERIALS UIDS: LinkMaster ID` list.

The detail provided after the colon allows you to specify the unit for an absolute quantity. Special allowed units for Ingredients are: `mass fraction`, `volume fraction`, and `number fraction`. More on these special units [here.](https://citrineinformatics.github.io/citrine-python/reference/citrine.resources.ingredient_spec.html)

**Examples**

INPUT MATERIALS UIDS: LinkMaster ID| INGREDIENT AMOUNTS SPEC: g|
------------------------------|--------------------|
business_unit_389h_bd2b_93, business_unit_389h_b633_67| 5.5, 0.8|

INPUT MATERIALS UIDS: LinkMaster ID|INGREDIENT AMOUNTS SPEC: mass fraction|
------------------|--------------------------------|
725892-v44f3-34t34f-45t45g4-rff43gf5f2, 423904790-grgf34r3-r432f42f42-3r23rf43f423| 0.25, 0.75|

INPUT MATERIALS UIDS: LinkMaster ID| INGREDIENT AMOUNTS SPEC: kg|
------------------|--------------------|
725892-v44f3-34t34f-45t45g4-rff43gf5f2| 60


### 1.7.17. INGREDIENT AMOUNTS RUN: unit or type
The Ingredient Amounts Spec Column should contain the actual (run) *amount* of each input material. The length of the list provided *must* match the length of the row's `INPUT MATERIALS UIDS: LinkMaster ID` list, but there can be empty values in the list.

The detail provided after the colon allows you to specify the unit for an absolute quantity. Special allowed units for Ingredients are: `mass fraction`, `volume fraction`, and `number fraction`. More on these special units [here.](https://citrineinformatics.github.io/citrine-python/reference/citrine.resources.ingredient_run.html)

**Examples**

INPUT MATERIALS UIDS: LinkMaster ID| INGREDIENT AMOUNTS RUN: g|
------------------------------|--------------------|
business_unit_389h_bd2b_93, business_unit_389h_b633_67| 5.5, 0.8|

INPUT MATERIALS UIDS: LinkMaster ID|INGREDIENT AMOUNTS RUN: mass fraction|
------------------|--------------------------------|
725892-v44f3-34t34f-45t45g4-rff43gf5f2, 423904790-grgf34r3-r432f42f42-3r23rf43f423| 0.25, 0.75|

INPUT MATERIALS UIDS: LinkMaster ID| INGREDIENT AMOUNTS RUN: kg|
------------------|--------------------|
725892-v44f3-34t34f-45t45g4-rff43gf5f2| 60


### 1.7.18. INGREDIENT LABELS
The Ingredient Labels Column should contain the labels you would like to associate to each Ingredient. The length of the list provided *must* match the length of the row's `INPUT MATERIALS UIDS: LinkMaster ID` list, but there can be empty values in the list.

**Examples**

INPUT MATERIALS UIDS: LinkMaster ID| INGREDIENT LABELS|
------------------------------|--------------------|
business_unit_389h_bd2b_93, business_unit_389h_b633_67| catalyst, solvent|

INPUT MATERIALS UIDS: LinkMaster ID| INGREDIENT LABELS|
------------------|--------------------------------|
725892-v44f3-34t34f-45t45g4-rff43gf5f2, 423904790-grgf34r3-r432f42f42-3r23rf43f423, 8734897-5g45g45v-h87fg3f67g43-43f4f34| slurry, ,dispersant|


### 1.7.19. INGREDIENT NAMES
The Ingredient Names Column should contain the name(s) you would like to call to each Ingredient. The length of the list provided *must* match the length of the row's `INPUT MATERIALS UIDS: LinkMaster ID` list. The `Ingredient Names` column is one of the *required* column headers in a Process tab (unless it is a Process that instantiates a Material such as a Purchasing Process).

**Examples**

INPUT MATERIALS UIDS: LinkMaster ID| INGREDIENT NAMES|
------------------------------|--------------------|
business_unit_389h_bd2b_93, business_unit_389h_b633_67| platinum, water|


### 1.7.20. PROCESS NAME
The Process Name should contain the name of the Process. **This is a mandatory field for Process Tabs**.

**Examples:**

PROCESS NAME|
------------------------------|
degassing|


### 1.7.21. PROCESS TEMPLATE: custom uid name or "id"
The Process Template should contain the unique ID of the Process's Template. If this column is not present or if the field is empty, the Process is assumed to not have a Process Template.  The detail provided after the colon allows you to specify [*which* unique ID to reference (the scope)](https://citrineinformatics.github.io/taurus-documentation/specification/unique-identifiers/); if nothing is provided here it defaults to the Citrine Platform UUID.

**Examples:**

PROCESS TEMPLATE: my cool id|
------------------------------|
business_unit_389h_bd2b_93|

PROCESS TEMPLATE|
------------------|
725892-v44f3-34t34f-45t45g4|


### 1.7.22. PROCESS UID: custom uid name
The Process UID Column should contain the Unique ID of the Process. The detail provided after the colon allows you to specify *which* unique ID to reference (the scope). You can read more about UID scopes [here](https://citrineinformatics.github.io/taurus-documentation/specification/unique-identifiers/). Note that you cannot use the scope of `id` here, as this is reserved for the Citrine Platform. Multiple Process UID columns can be specified, but each must have a different UID name (scope).

**Examples**

PROCESS UID: my cool id|
------------------------------|
business_unit_389h_bd2b_93

### 1.7.23. PROCESS FILE LINKS
The Process File Links should contain the filename(s) of file(s) you would like to associate with this Process. Note these must be in the same directory as the LinkMaster File (relative paths are not supported). Multiple files can be added by using a comma to separate file names.

**Examples:**

PROCESS FILE LINKS|
---------------|
20191027_info.txt, 2018_inst_calib.csv|

PROCESS FILE LINKS|
---------------|
20190916_output.csv|


### 1.7.24. PROCESS NOTES
The Process Notes should contain free-style text about the Process.

**Examples:**

PROCESS NOTES|
---------------|
This was the first time I ran this process, so I may have messed it up.|


### 1.7.25. PROCESS TAGS
The Process Tags should contain tags you would like to associate with the Process. Read more about tags [here.](https://citrineinformatics.github.io/taurus-documentation/specification/tags/)

**Examples:**

PROCESS TAGS|
---------------|
oven_firing::BlueM, oven_firing::dry|


### 1.7.26. PROCESS DATE
The Process Date should contain the date on which the process was started. Please use `MM/DD/YYYY` syntax.

**Examples:**

PROCESS DATE|
---------------|
09/16/2019|


### 1.7.27. PROCESS OPERATOR
The Process Operator should contain the name of the person who performed the process.

**Examples:**

PROCESS OPERATOR|
---------------|
Lenore Kubie|


### 1.7.28. OUTPUT MATERIAL UID: custom uid name
The `Output Material UID` Column should contain the Unique ID of the Material produced from the Process described in that Process Tab. This is one of the *required* columns for a Process. The detail provided after the colon allows you to specify *which* unique ID to reference (the scope). You **must** have one `Output Material UID` column with the `scope` of `LinkMaster ID` in every Process Tab. You can assign the output Material Run a custom UID by supplying additional `Output Material UID` columns with different `scopes`. You can read more about UID scopes [here](https://citrineinformatics.github.io/taurus-documentation/specification/unique-identifiers/). Note that you cannot use the scope of `id` here, as this is reserved for the Citrine Platform. Multiple Output Material UID columns can be specified, but each must have a different UID scope (detail).

**Examples**

OUTPUT MATERIAL UID: LinkMaster ID|
------------------------------|
business_unit_389h_bd2b_93

OUTPUT MATERIAL UID: LinkMaster ID| OUTPUT MATERIAL UID: my custom scope name
------------------------------|---------------------------|
business_unit_389h_bd2b_93 | cookie_7b87209f09f

### 1.7.29. OUTPUT MATERIAL TEMPLATE: custom uid name or "id"
The `Output Material Template` column should contain the unique ID of the Output Material's Material Template. If this column is not present or if the field is empty, the output  Material is assumed to not have a Material Template. The detail provided after the colon allows you to specify [*which* unique ID to reference (the scope)](https://citrineinformatics.github.io/taurus-documentation/specification/unique-identifiers/); if nothing is provided here it defaults to the Citrine Platform UID.

**Examples:**

OUTPUT MATERIAL TEMPLATE: custom material template id name|
------------------------------|
business_unit_389h_bd2b_93|

OUTPUT MATERIAL TEMPLATE|
------------------|
725892-v44f3-34t34f-45t45g4|


### 1.7.30. OUTPUT MATERIAL NAME
The Output Material Name should contain the name of the Output Material. *This is one of the mandatory columns in a Process tab.*

**Examples:**

OUTPUT MATERIAL NAME|
------------------------------|
NaCl Sample 3729289|


### 1.7.31. OUTPUT MATERIAL TAGS
The Output Material Tags should contain tags you would like to associate with the Output Material. Read more about tags [here](https://citrineinformatics.github.io/taurus-documentation/specification/tags/)

**Examples:**

OUTPUT MATERIAL TAGS|
---------------|
Salt::NaCl, Sodium_Chloride|


### 1.7.32. OUTPUT MATERIAL NOTES
The Output Material Notes should contain free-style text about the Output Material from a Process.

**Examples:**

OUTPUT MATERIAL NOTES|
---------------|
The material looked like a different color than normal.|


### 1.7.33. OUTPUT MATERIAL TYPE
The Output Material Type column is where you can record the form of this sample. Options are "experimental", "virtual", "production", or "unknown." Default is "unknown."

**Examples**

OUTPUT MATERIAL TYPE|
--------------------|
experimental|


### 1.7.34. OUTPUT MATERIAL FILE LINKS
The Output Material File Links column should contain the filename(s) of file(s) you would like to associate with this Output Material. Note these must be in the same directory as the LinkMaster File (relative paths are not supported). Multiple files can be added by using a comma to separate file names.

**Examples:**

OUTPUT MATERIAL FILE LINKS|
---------------|
20191027_info.txt, 2018_inst_calib.csv|

OUTPUT MATERIAL FILE LINKS|
---------------|
20190916_output.csv|


### 1.7.35. INPUT MATERIAL UID: LinkMaster ID
The Input Material UID column should contain the unique LinkMaster ID of the Material entering a Measurement. [For denoting Materials in a Process, please see](#input-materials-uids-linkmaster-id). This is one of the *required* columns for a Measurement. The `scope` **must** be `LinkMaster ID` for this column. You can read more about UID scopes [here](https://citrineinformatics.github.io/taurus-documentation/specification/unique-identifiers/).

**Examples**

INPUT MATERIAL UID: LinkMaster ID|
------------------------------|
business_unit_389h_bd2b_93|


### 1.7.36. MEASUREMENT NAME
The Measurement Name column should contain the name of the Measurement. *This is one of the mandatory columns in a Measurement Tab.*

**Examples:**

MEASUREMENT NAME|
------------------------------|
3-point probe|


### 1.7.37. MEASUREMENT TEMPLATE: custom uid name or "id"
The Measurement Template column should contain the unique ID of the Measurement's Template. The detail provided after the colon allows you to specify [*which* unique ID to reference (the scope)](https://citrineinformatics.github.io/taurus-documentation/specification/unique-identifiers/); if nothing is provided here it defaults to the Citrine Platform UID.

**Examples:**

MEASUREMENT TEMPLATE: my cool id|
------------------------------|
business_unit_389h_bd2b_93|

MEASUREMENT TEMPLATE|
------------------|
725892-v44f3-34t34f-45t45g4|


### 1.7.38. MEASUREMENT DATE
The Measurement Date should contain the date on which the Measurement was started. Please use `MM/DD/YYYY` syntax.

**Examples:**

MEASUREMENT DATE|
---------------|
09/16/2019|


### 1.7.39. MEASUREMENT OPERATOR
The Measurement Operator should contain the name of the person who performed the Measurement.

**Examples:**

MEASUREMENT OPERATOR|
---------------|
Lenore Kubie|


### 1.7.40. MEASUREMENT UID
The Measurement UID Column should contain the Unique ID of the Measurement. The detail provided after the colon allows you to specify *which* unique ID to reference (the scope). You can read more about UID scopes [here](https://citrineinformatics.github.io/taurus-documentation/specification/unique-identifiers/). Note that you cannot use the scope of `id` here, as this is reserved for the Citrine Platform. Multiple Measurement UID columns can be specified, but each must have a different UID name (scope).

**Examples**

MEASUREMENT UID: my cool id|
------------------------------|
business_unit_389h_bd2b_93


### 1.7.41. MEASUREMENT FILE LINKS
The Measurement File Links should contain the filename(s) of file(s) you would like to associate with this Measurement. Note these must be in the same directory as the LinkMaster File (relative paths are not supported). Multiple files can be added by using a comma to separate file names. This will only be recorded in the corresponding Run.

**Examples:**

MEASUREMENT FILE LINKS|
---------------|
20191027_info.txt, 2018_inst_calib.csv|

MEASUREMENT FILE LINKS|
---------------|
20190916_output.csv|


### 1.7.42. MEASUREMENT NOTES
The Measurements Notes should contain free-style text about the Measurement.

**Examples:**

MEASUREMENT NOTES|
---------------|
This was the first time I ran this measurement, so I may have messed it up.|


### 1.7.43. MEASUREMENT TAGS
The Measurement Tags should contain tags you would like to associate with the the Measurement. Read more about tags [here](https://citrineinformatics.github.io/taurus-documentation/specification/tags/)

**Examples:**

MEASUREMENT TAGS|
---------------|
density::Archimedes|


### 1.7.44. PROPERTY NAME
The Property Name should contain the name of the Property. The name of the Property will be the same for the corresponding Object's Spec and Run. **NOTE** A Property Name column is necessary to add a Property to a Measurement. The Property information (e.g Property Notes, Property File Links, etc.) supplied to the *right* of the Property Name column(s) are associated with this Property. A **new** Property can be started by supplying another Property Name column.

**Examples:**

PROPERTY NAME|
--------------|
Melting Point|


### 1.7.45. PROPERTY TEMPLATE: custom uid name or "id"
 The Property Template should contain a unique ID of the Property's Template. If this column is not present or if the field is empty, the Property is assumed to not have a Property Template. The detail provided after the colon allows you to specify [*which* unique ID to reference (the scope)](https://citrineinformatics.github.io/taurus-documentation/specification/unique-identifiers/); if nothing is provided here it defaults to the Citrine Platform UUID.

**Examples:**

PROPERTY TEMPLATE: my cool id|
------------------------------|
business_unit_389h_bd2b_93|

PROPERTY TEMPLATE|
------------------|
725892-v44f3-34t34f-45t45g4


### 1.7.46. PROPERTY NOTES
The Property Notes should contain free-style text about the Property. This will only be recorded in the corresponding Run.

**Examples:**

PROPERTY NOTES|
---------------|
The thermocouple reading the Max Temp was being finicky. Not sure how much I trust this value.|


### 1.7.47. PROPERTY FILE LINKS
The Property File Links should contain the filename(s) of file(s) you would like to associate with this Property. Note these must be in the same directory as the LinkMaster File (relative paths are not supported). Multiple files can be added by using a comma to separate file names. This will only be recorded in the corresponding Run.

**Examples:**

PROPERTY FILE LINKS|
---------------|
20191027_info.txt, 2018_inst_calib.csv|

PROPERTY FILE LINKS|
---------------|
20190916_output.csv|


### 1.7.48. PROPERTY ORIGIN
The Property Origin should contain the origin of said Property. The Value must be one of “measured”, “predicted”, “summary”, “specified”, “computed”, or “unknown.” Default is “unknown.” This will only be recorded in the corresponding Run.

**Examples:**

PROPERTY ORIGIN|
---------------|
measured|


### 1.7.49. PROPERTY VALUE RUN: unit or type
The Property Value Run should contain the value of the *run* of that Property. Units or value type can be provided after a colon, but default to unitless. [Please see value types for more information](#Value-Types). Note that Measurement Spec objects cannot hold Properties, and thus `PROPERTY VALUE SPEC` is not a valid header.

**Examples:**

PROPERTY VALUE RUN: g|
---------------|
4.5|

PROPERTY VALUE RUN|
---------------|
5.8 ± 0.4|

PROPERTY VALUE RUN: categorical|
---------------|
convention|

# 2. Using the Ingester

## 2.1. Installation

`git clone` the LinkMaster Repo
`cd` into the repo folder
`pip install -e .` Note the `-e` is optional here, but will allow you to make local changes.

## 2.2. Running from the CLI

### 2.2.1. ingest.py -- Ingesting a LinkMaster File

```
ingest -i path/to/linkmaster_file.xlsx -c path/to/config_file.json (-t)
```

The -t flag enables testing mode. In testing mode, no objects are actually registered to the platform. Instead, a report on 
which objects would have been registered is generated.

### 2.2.2. precheck.py -- Checking a LinkMaster File for correctness
```
precheck -i path/to/linkmaster_file.xlsx -c path/to/config_file.json
```

This generates an output `txt` file in the same directory as your LinkMaster file detailing all of the passed tests and any inaccuracies found.


## 2.3. Config Files.
Examples can be found for [if you have an existing project and dataset](https://github.com/CitrineInformatics/linkmaster/blob/master/examples/example_config_existing_dataset.json) or [if you need to create a new project and dataset](https://github.com/CitrineInformatics/linkmaster/blob/master/examples/example_config_new_proj.json)